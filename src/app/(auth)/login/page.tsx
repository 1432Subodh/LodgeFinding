// "use client"

// import Link from "next/link"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { AuthLayout } from "@/components/auth-components/auth-layout"
// import { PageTransition } from "@/components/auth-components/page-transition"
// import toast from "react-hot-toast"
// import { postReq } from "../../../../helper/postReq"
// import { useRouter } from "next/navigation"

// export default function SignIn() {
//     const router = useRouter()
  
//   const handleSubmit = async(e:any)=>{
    
//       const formData = new FormData(e.target)
//         console.log(formData)
//       const data = {
//         email : formData.get('email'),
//         password : formData.get('password'),
//         remember : formData.get('remember'),
//       }
  
//     console.log(data)
//     e.preventDefault()
//     const res = await postReq({URL:'/api/user/auth/login', data})
//     console.log(res)
//     if(res.data.success){
//       toast.success(res.data.message)
//       router.push('/lodge')
//       e.target.reset();
//     }else{
//       toast.error(res.data.message)
//       e.target.reset();

//     }
//   }

//   return (
//     <form action="" onSubmit={handleSubmit}>
//     <PageTransition>
//       <AuthLayout title="Welcome back" subtitle="Welcome back! Please enter your details." contentPosition="right">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="space-y-6"
//         >
//           <motion.div
//             className="space-y-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//           >
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" placeholder="Enter your email" name="email" type="email" required autoCapitalize="on"/>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input id="password" type="password" required name="password" autoCapitalize="on"/>
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="remember" name="remember"/>
//                 <label
//                   htmlFor="remember"
//                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                 >
//                   Remember for 30 days
//                 </label>
//               </div>
//               <Link href="/forgot-password" className="text-sm font-medium text-muted-foreground hover:text-zinc-600">
//                 Forgot password?
//               </Link>
//             </div>
//           </motion.div>
//           <div className="space-y-4">
//             <Button className="w-full">Sign in</Button>
//             <Button variant="outline" className="w-full">
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                 <path
//                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                   fill="#4285F4"
//                 />
//                 <path
//                   d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                   fill="#34A853"
//                 />
//                 <path
//                   d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                   fill="#FBBC05"
//                 />
//                 <path
//                   d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                   fill="#EA4335"
//                 />
//               </svg>
//               Sign in with Google
//             </Button>
//           </div>
//           <div className="text-center text-sm">
//             Don&apos;t have an account?{" "}
//             <Link href="/signup" className="font-medium text-muted-foreground hover:text-zinc-600">
//               Sign up
//             </Link>
//           </div>
//         </motion.div>
//       </AuthLayout>
//     </PageTransition>
//     </form>
//   )
// }

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/auth-components/auth-layout";
import { PageTransition } from "@/components/auth-components/page-transition";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignIn() {
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
            remember: formData.get("remember"),
        };
        console.log(data)

        // Show a promise toast while the login request is in progress
        await toast.promise(
            axios.post('/api/user/auth/login', data),
            // postReq({ URL: "/api/user/auth/login", data }),
            {
                loading: "Logging in...",
                success: (res) => {
                    if (res.data.success) {
                        console.log(res)
                        router.push("/lodge");
                        e.target.reset();
                        return res.data.message; // Success message from API
                    } else {
                        throw new Error(res.data.message); // Force error handling
                    }
                },
                error: (err) => err.message || "Login failed! Try again.",
            }
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <PageTransition>
                <AuthLayout
                    title="Welcome back"
                    subtitle="Welcome back! Please enter your details."
                    contentPosition="right"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Enter your email" name="email" type="email" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" required name="password" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="remember" name="remember" />
                                    <label htmlFor="remember" className="text-sm font-medium">
                                        Remember for 30 days
                                    </label>
                                </div>
                                <Link href="/forgot-password" className="text-sm font-medium text-muted-foreground hover:text-zinc-600">
                                    Forgot password?
                                </Link>
                            </div>
                        </motion.div>
                        <div className="space-y-4">
                            <Button className="w-full">Sign in</Button>
                            <Button variant="outline" className="w-full">
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                Sign in with Google
                            </Button>
                        </div>
                        <div className="text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="/signup" className="font-medium text-muted-foreground hover:text-zinc-600">
                                Sign up
                            </Link>
                        </div>
                    </motion.div>
                </AuthLayout>
            </PageTransition>
        </form>
    );
}

