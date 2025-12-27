"use client";

import { Suspense, useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, Loader2, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WelcomeBackBanner } from "@/components/welcome-back-banner";
import { AutoLoginCheck } from "@/components/auto-login-check";
import { useRememberMe } from "@/hooks/use-remember-me";
import { useToast } from "@/hooks/use-toast";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const { rememberedData, isLoaded, saveRememberMe, clearRememberMe } =
    useRememberMe();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Pre-fill email from remembered data
  useEffect(() => {
    if (isLoaded && rememberedData) {
      setEmail(rememberedData.email);
      setRememberMe(rememberedData.rememberMe);
    }
  }, [isLoaded, rememberedData]);

  // Check for error from callback
  useEffect(() => {
    const errorParam = searchParams.get("error");
    if (errorParam) {
      setError("Đăng nhập thất bại. Vui lòng kiểm tra thông tin đăng nhập.");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email hoặc mật khẩu không chính xác");
        toast({
          title: "Đăng nhập thất bại",
          description: "Vui lòng kiểm tra lại thông tin đăng nhập",
          variant: "destructive",
        });
      } else {
        // Save remember me data
        saveRememberMe(email, rememberMe);
        toast({
          title: "Đăng nhập thành công",
          description: "Đang chuyển hướng...",
        });
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearRemember = () => {
    setEmail("");
    setRememberMe(false);
    clearRememberMe();
  };

  return (
    <AutoLoginCheck>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 w-full max-w-md px-4">
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25">
              <Store className="h-8 w-8 text-white" />
            </div>
            <h1 className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
              KiotViet
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Hệ thống quản lý bán hàng
            </p>
          </div>

          <Card className="border-slate-800 bg-slate-900/80 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-xl font-semibold text-slate-100">
                Đăng nhập
              </CardTitle>
              <CardDescription className="text-slate-400">
                Nhập thông tin để truy cập hệ thống
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WelcomeBackBanner onClear={handleClearRemember} />

              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="border-slate-700 bg-slate-800/50 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-300">
                    Mật khẩu
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isLoading}
                      className="border-slate-700 bg-slate-800/50 pr-10 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:bg-transparent hover:text-slate-200"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                    disabled={isLoading}
                    className="border-slate-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                  />
                  <Label
                    htmlFor="remember"
                    className="cursor-pointer text-sm text-slate-400"
                  >
                    Ghi nhớ đăng nhập
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/30"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Đang đăng nhập...
                    </>
                  ) : (
                    "Đăng nhập"
                  )}
                </Button>
              </form>

              {/* Demo accounts info */}
              <div className="mt-6 rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                <p className="mb-2 text-xs font-medium text-slate-400">
                  Tài khoản demo:
                </p>
                <div className="space-y-1 text-xs text-slate-500">
                  <p>
                    <span className="text-slate-300">Admin:</span>{" "}
                    admin@kiotviet.vn / admin123
                  </p>
                  <p>
                    <span className="text-slate-300">User:</span>{" "}
                    user@kiotviet.vn / user123
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="mt-6 text-center text-xs text-slate-500">
            © 2024 KiotViet. All rights reserved.
          </p>
        </div>
      </div>
    </AutoLoginCheck>
  );
}

function SignInLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<SignInLoading />}>
      <SignInForm />
    </Suspense>
  );
}
