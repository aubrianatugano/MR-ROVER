import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      
      <div className="w-1/2 bg-blue-200 flex justify-center items-center p-8">
        <div className="flex flex-col items-center space-y-8">
          
          <div className="w-full flex justify-center">
            <Image src="/assets/LP.jpg" alt="MR. Rover" width={400} height={400} />
          </div>
          <Button variant="contained" color="primary" className="rounded-full px-8 py-3">
            Reserve Now
          </Button>
        </div>
      </div>

      
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <div className="max-w-md w-full space-y-6 p-8">
          <h1 className="text-3xl text-gray-950 font-bold">Welcome Back!</h1>

          <form>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              className="mb-4"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              className="mb-4"
            />
            
            <div className="flex justify-between text-blue-600 items-center mb-4">
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <a href="#" className="text-blue-600">Forgot password?</a>
            </div>

            <Button variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
