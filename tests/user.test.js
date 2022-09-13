const expect = require("chai").expect;

const request = require("request");

const baseUrl = "http://localhost:8080";

describe("user controller check", () => {
  describe("User Registration", () => {
    describe("Validation check", () => {
      it("give status code 400", (done) => {
        const payload = {
          full_name: "",
          email: "hariom@gmail.com",
          password: "12345",
        }; 

        request.post(
          `${baseUrl}/api/users/register`,
          {
            json: payload,
          },
          (_, response) => {
            // console.log("status",response.statusCode)
            expect(response.statusCode).to.equal(400);
            done();
          }
        );
      });

      it("Full_Name validation Check", (done) => {
        const payload = {
          full_name: "",
          email: "hariom@gmail.com",
          password: "12345",
        };
        request.post(
          `${baseUrl}/api/users/register`,
          {
            json: payload,
          },
          (_, response) => {
            // console.log("res.body",response.body)
            expect(response.body.message).to.equal("Full Name is Required!");
            done();
          }
        );
      });
      it("Checking Email ", (done) => {
        const payload = {
          full_name: "Hariom hhh",
          email: "",
          passoword: "12345",
        };
        request.post(
          `${baseUrl}/api/users/register`,
          {
            json: payload,
          },
          (_, response) => {
            // console.log("res.body",response.body)
            expect(response.body.message).to.equal("Email is Required!");
            done();
          }
        );
      });
      it("Valid Email ", (done) => {
        const payload = {
          full_name: "Hariom hhh",
          email: "hariomgmail.com",
          password: "12345",
        };
        request.post(
          `${baseUrl}/api/users/register`,
          {
            json: payload,
          },
          (_, response) => {
            // console.log("res.body",response.body)
            expect(response.body.message).to.equal(
              "Please enter correct email!"
            );
            done();
          }
        );
      });
      it("Checking password ", (done) => {
        const payload = {
          full_name: "Hariom hhh",
          email: "hariom@gmail.com",
          password: "",
        };
        request.post(
          `${baseUrl}/api/users/register`,
          {
            json: payload,
          },
          (_, response) => {
            // console.log("res.body",response.body)
            expect(response.body.message).to.equal("Password  is required!");
            done();
          }
        );
      });

      it("Checking password Length ", (done) => {
        const payload = {
          full_name: "Hariom hhh",
          email: "hariom@gmail.com",
          password: "12345",
        };
        request.post(
          `${baseUrl}/api/users/register`,
          {
            json: payload,
          },
          (_, response) => {
            // console.log("res.body",response.body)
            expect(response.body.message).to.equal(
              "Password must have at least 6 characters,at least one Lowercase ,one uppercase and one number!"
            );
            done();
          }
        );
      });

      it("Checking user already exist ", (done) => {
        const payload = {
          full_name: "Hariom",
          email: "hariom@cosmiclabs.co",
          password: "Hariom22",
        };
        request.post(
          `${baseUrl}/api/users/register`,
          {
            json: payload,
          },
          (_, response) => {
            // console.log("res.body",response.body)
            expect(response.body.message).to.equal("user already exist");
            done();
          }
        );
      });
      it("register Success", (done) => {
        const payload = {
          full_name: "Super er",
          email: "superer@gmail.com",
          password: "Admin22",
        };
        request.post(
          `${baseUrl}/api/users/register`,
          {
            json: payload,
          },
          (_, response) => {
            console.log("res.body", response.body);
            expect(response.body.message).to.equal("Registered Successfully");
            done();
          }
        );
      });
    });
  });

  describe("User Login", () => {
    it("Enter all Fields Validation check", (done) => {
      const payload = {
        email: "hariom@cosmiclabs.co",
        password: "",
      };
      request.post(
        `${baseUrl}/api/users/login`,
        {
          json: payload,
        },
        (_, response) => {
          // console.log("res.body",response.body)

          expect(response.body.message).to.equal("Please add all fields");
          done();
        }
      );
    });
    it("email does not match", (done) => {
      const payload = {
        email: "hariom@cosmicabs.co",
        password: "Hariom22",
      };
      request.post(
        `${baseUrl}/api/users/login`,
        {
          json: payload,
        },
        (_, response) => {
          // console.log("res.body",response.body)

          expect(response.body.message).to.equal("email Does Not Match");
          done();
        }
      );
    });
    it("password does not match", (done) => {
      const payload = {
        email: "hariom@cosmiclabs.co",
        password: "Hariom2",
      };
      request.post(
        `${baseUrl}/api/users/login`,
        {
          json: payload,
        },
        (_, response) => {
          // console.log("res.body",response.body)

          expect(response.body.message).to.equal("Password Does Not Match");
          done();
        }
      );
    });
    it("Login Success", (done) => {
      const payload = {
        email: "hariom@cosmiclabs.co",
        password: "Hariom22",
      };
      request.post(
        `${baseUrl}/api/users/login`,
        {
          json: payload,
        },
        (_, response) => {
          console.log("res.body", response.body);

          expect(response.body.message).to.equal("login Successfully");
          done();
        }
      );
    });
  });

  describe("Updating access token using refreshtoken", () => {
    it("validation for Refreshtoken", (done) => {
      const payload = {
        refreshToken: "",
      };
      request.post(
        `${baseUrl}/api/users/refresh`,
        {
          json: payload,
        },
        (_, response) => {
          // console.log("res.body",response.body)
          expect(response.body.message).to.equal(
            "Refresh token not found, login again"
          );
          done();
        }
      );
    });

    it("Success", (done) => {
      const payload = {
        refreshToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjIxMzczYmEyYzUxZTNiNjY1ZDE2NyIsImZ1bGxfbmFtZSI6IkhhcmlvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjYwMDMxODYwLCJleHAiOjE2NjAwNTM0NjB9.K3Mc8_qfEsBHgKp_TDcpmwges8Hv2J0w2t_051pU1a4",
      };
      request.post(
        `${baseUrl}/api/users/refresh`,
        {
          json: payload,
        },
        (_, response) => {
          console.log("res.body",response.body)
          expect(response.body.message).to.equal(
            "Successfully Updated AccessToken"
          );
          done();
        }
      );
    });
  });
});
