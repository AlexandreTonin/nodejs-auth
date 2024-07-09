import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const RegisterPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="px-64">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Register</FormLabel>
            <div className="mb-4">
              <InputGroup size="md" className="flex gap-4">
                <Input
                  id="firstName"
                  name="firstName"
                  type={"text"}
                  onChange={handleChange}
                  value={formData.firstName}
                  placeholder="Enter first name"
                />
                <Input
                  id="lastName"
                  name="lastName"
                  type={"text"}
                  onChange={handleChange}
                  value={formData.lastName}
                  placeholder="Enter last name"
                />
              </InputGroup>
            </div>
            <div className="mb-4">
              <Input
                pr="4.5rem"
                id="email"
                name="email"
                type={"email"}
                onChange={handleChange}
                value={formData.email}
                placeholder="Enter email"
              />
            </div>
            <div className="mb-4">
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  onChange={handleChange}
                  value={formData.password}
                  placeholder="Enter password"
                  id="password"
                  name="password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>
          </FormControl>
          <Button className="w-full" colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
