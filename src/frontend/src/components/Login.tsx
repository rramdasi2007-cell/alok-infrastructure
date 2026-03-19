import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Eye, EyeOff, Lock, User } from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

interface LoginProps {
  onLoginSuccess: (token: string) => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const { actor } = useActor();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      setError("Service unavailable. Please try again.");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      const token = await actor.login(username, password);
      localStorage.setItem("adminToken", token);
      onLoginSuccess(token);
    } catch {
      setError("Invalid username or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy to-navy-light flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <img
              src="/assets/uploads/WhatsApp-Image-2026-03-17-at-4.47.30-PM-1.jpeg"
              alt="Alok Infrastructure"
              className="h-14 w-14 rounded-full object-cover border-2 border-brand-orange shadow-lg"
            />
            <div className="text-left">
              <div className="font-bold text-2xl text-white tracking-wide">
                ALOK
              </div>
              <div className="text-xs text-brand-orange tracking-widest font-medium">
                INFRASTRUCTURE
              </div>
            </div>
          </div>
          <h1 className="text-white text-xl font-semibold">Admin Portal</h1>
          <p className="text-gray-400 text-sm mt-1">
            Sign in to manage enquiries
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Orange accent bar */}
          <div className="h-1 w-full bg-brand-orange" />

          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            {/* Error */}
            {error && (
              <div
                data-ocid="login.error_state"
                className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Username */}
            <div className="space-y-1.5">
              <Label htmlFor="username" className="text-gray-700 font-medium">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="username"
                  data-ocid="login.username.input"
                  type="text"
                  placeholder="Enter username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 h-11 border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  data-ocid="login.password.input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-11 border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              data-ocid="login.submit_button"
              disabled={isLoading}
              className="w-full h-11 bg-navy hover:bg-navy-light text-white font-semibold text-sm transition-colors mt-2"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="px-8 pb-6 text-center">
            <p className="text-xs text-gray-400">
              Restricted access — authorized personnel only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
