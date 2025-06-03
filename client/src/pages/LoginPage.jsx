import { Button } from "@/components/ui/button"
import Dexkor from "./Dexkor_logo.png"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { FcGoogle } from "react-icons/fc" // ✅ Install with `npm i react-icons`

const LoginPage = () => {
  const handleGoogleSignup = () => {
    // Implement Google OAuth flow here (e.g., Firebase or OAuth API call)
    alert("Google Sign-Up triggered");
  };

  return (
    <div className="flex items-center justify-center h-screen select-none bg-blue-100">
     <div className="fixed top-0 left-0 w-full h-18 bg-blue-900 flex items-center justify-start px-4 z-50">
  <img src={Dexkor} alt="Dexkor Logo" className="h-7" />
</div>



       
      <Tabs defaultValue="signup" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup" className="cursor-pointer">Signup</TabsTrigger>
          <TabsTrigger value="login" className="cursor-pointer">Login</TabsTrigger>
        </TabsList>

        <TabsContent value="signup">
          <Card>
            <CardHeader className='flex justify-center'>
              <CardTitle>Signup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required="true" placeholder="xyz"/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" required="true" placeholder="xyz@gmail.com"/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" required="true"placeholder="password"/>
              </div>
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">or</span>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={handleGoogleSignup}
                className="w-full flex items-center justify-center gap-2 border-gray-300 cursor-pointer"
              >
                <FcGoogle size={20} />
                Sign up with Google
              </Button>
            </CardContent>
            <CardFooter className='flex justify-center'>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">Sign Up</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="login">
          <Card>
            <CardHeader className='flex justify-center'>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required="true" placeholder="xyz@gmail.com"/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required="true" placeholder="password"/>
              </div>
            </CardContent>
            <CardFooter className='flex justify-center'>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default LoginPage;
