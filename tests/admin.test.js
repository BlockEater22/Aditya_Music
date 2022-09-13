const expect = require("chai").expect;

const request = require("request");

const baseUrl = "http://localhost:8080";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjIxMzczYmEyYzUxZTNiNjY1ZDE2NyIsImZ1bGxfbmFtZSI6IkhhcmlvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY2MDA1Mjg0MiwiZXhwIjoxNjYwMDYzNjQyfQ.zwOQxQP_EZQoeXjLGaSo-onMb8FQ5HI0DstJL7XWtrA";

describe("admin controller api", () => {
  describe("update status check", () => {
    describe("Validation check", () => {
      it("Update success test", (done) => {
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.post(
          {
            url: `${baseUrl}/api/admin/updatestatus/62f2634661a2e59b64397d4d`,
            headers,
          },

          (_, response) => {
            const res = JSON.parse(response.body);
            console.log("res.body", res.message);
            expect(res.message).to.equal("Document updated successfully");
            done();
          }
        );
      });

      it("Invalid Document check", (done) => {
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.post(
          {
            url: `${baseUrl}/api/admin/updatestatus/62f2634661a2e59b64397d4e`,
            headers,
          },

          (_, response) => {
            const res = JSON.parse(response.body);
            console.log("res.body", res.message);
            expect(res.message).to.equal("Invalid document");
            done();
          }
        );
      });

      it("something went wrong", (done) => {
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.post(
          {
            url: `${baseUrl}/api/admin/updatestatus/62f2634661a2e59b64397d4`,
            headers,
          },

          (_, response) => {
            const res = JSON.parse(response.body);
            console.log("res.body", res.message);
            expect(res.message).to.equal("Something went Wrong!");
            done();
          }
        );
      });
    //   for making this test run you need to add accesstoken of user
        it("enter admins email", (done) => {
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/admin/updatestatus/62f2634661a2e59b64397d4d`,
              headers,
            },

            (_, response) => {
              const res = JSON.parse(response.body)
               console.log("res.body",(res.message))
            expect(res.message).to.equal("Please Enter Admins Email Address");
              done();
            }
          );
        });
    });
  });
});
