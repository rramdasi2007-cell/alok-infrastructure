import List "mo:core/List";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  public type Contact = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    serviceType : Text;
  };

  public type CompanyStats = {
    yearsExperience : Nat;
    projectsCompleted : Nat;
    clientsServed : Nat;
  };

  public type User = {
    username : Text;
    password : Text;
  };

  let adminUser : User = {
    username = "admin";
    password = "password";
  };

  let enquiries = List.empty<Contact>();
  let sessions = Map.empty<Text, ()>();

  let companyStats : CompanyStats = {
    yearsExperience = 10;
    projectsCompleted = 200;
    clientsServed = 150;
  };

  func isValidSession(token : Text) : Bool {
    switch (sessions.get(token)) {
      case (null) { false };
      case (?_) { true };
    };
  };

  func sessionCount() : Text {
    var count = 0;
    for (_ in sessions.keys()) {
      count += 1;
    };
    debug_show(count);
  };

  public shared func login(username : Text, password : Text) : async Text {
    if (username != adminUser.username or password != adminUser.password) {
      Runtime.trap("Invalid credentials, please try again");
    };
    let token = sessionCount();
    sessions.add(token, ());
    token;
  };

  public shared func logout(token : Text) : async () {
    if (not isValidSession(token)) {
      Runtime.trap("Invalid session token - not able to logout");
    };
    sessions.remove(token);
  };

  public shared func submitEnquiry(name : Text, email : Text, phone : Text, message : Text, serviceType : Text) : async () {
    let contact = { name; email; phone; message; serviceType };
    enquiries.add(contact);
  };

  public query func getAllEnquiries(token : Text) : async [Contact] {
    if (not isValidSession(token)) {
      Runtime.trap("Invalid session token, please login first");
    };
    enquiries.toArray();
  };

  public query func getCompanyStats() : async CompanyStats {
    companyStats;
  };
};
