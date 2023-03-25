import React, { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";

export default function ChangePass({ user }) {
  // const { user } = useContext(ProductContext);
  let auth = user?.token;
  const [isMenu, setIsMenu] = useState(1);
  const [eye, setEye] = useState(false);
  const [isOldPass, setOldIsPass] = useState();
  const [isPass, setIsPass] = useState();
  const [isConfirmPass, setIsConfirmPass] = useState();
  const [Form, setForm] = useState({
    oldPassword: "",
    password: "",
  });
  const handleChange = async (e) => {
    console.log("change");
    if (isConfirmPass == isPass) {
      const result = await axios.post({
        headers: { auth: auth },

        url: `http://localhost:8080/apiart/changepass`,
        data: { Form },
      });
      console.log(result);
      if (result.data.status == 200) {
        let timerInterval;
        Swal.fire({
          title: "Dữ Liệu Đang Cập Nhật",
          html: "I will close in <b></b> milliseconds.",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
            window.location.href = `/u/${user?.userId}`;
            setIsPass("");
            setIsConfirmPass("");
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      } else if (result.data.status == 201) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${result.data.message}`,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Mật Khẩu Không Khớp",
      });
    }
  };

  useEffect(() => {
    setForm({
      oldPassword: isOldPass,
      password: isConfirmPass,
    });
    console.log(Form);
  }, [isPass, isConfirmPass, isOldPass]);
  return (
    <Card className="w-[50%]">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <h3 variant="h3" color="white">
          Sign In
        </h3>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input
          value={isOldPass}
          onChange={(e) => setOldIsPass(e.target.value)}
          label="Old Pass"
          size="lg"
          placeholder="Current Password"
        />
        <Input
          value={isPass}
          onChange={(e) => setIsPass(e.target.value)}
          label="Password"
          size="lg"
          placeholder="New Password"
        />
        <Input
          value={isConfirmPass}
          onChange={(e) => setIsConfirmPass(e.target.value)}
          label="Password"
          size="lg"
          placeholder="Password"
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={handleChange} variant="gradient" fullWidth>
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
