const expect = require("chai").expect;

const request = require("request");

const baseUrl = "http://localhost:8080";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjIxMzczYmEyYzUxZTNiNjY1ZDE2NyIsImZ1bGxfbmFtZSI6IkhhcmlvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY2MDExMzA0OCwiZXhwIjoxNjYwMTk5NDQ4fQ.ola7yMjQsl10K5MHSjbWOjSPtBsdlSy6O0L_S0CHaNc";

describe("report controller check", () => {
  describe("Document by type", () => {
    describe("Invalid request", () => {
      it("Invalid request body", (done) => {
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.post(
          {
            url: `${baseUrl}/api/report/documenttype`,
            headers,
          },

          (_, response) => {
            const res = JSON.parse(response.body);
            console.log("res.body", res.message);
            expect(res.message).to.equal("Invalid request body");
            done();
          }
        );
      });
      it("Document not found ", (done) => {
        const payload = {
          documentType: "Album Acquisition Agree",
        };
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.post(
          {
            url: `${baseUrl}/api/report/documenttype`,
            headers,
            json: payload,
          },

          (_, response) => {
            //   console.log("res.body", response.body);
            expect(response.body.message).to.equal("Document not found!");
            done();
          }
        );
      });
      it("Document found Success", (done) => {
        const payload = {
          documentType: "Album Acquisition Agreement",
        };
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.post(
          {
            url: `${baseUrl}/api/report/documenttype`,
            headers,
            json: payload,
          },

          (_, response) => {
            //   console.log("res.body", response.body);
            expect(response.body.message).to.equal(
              "Document Found SuccessFully!"
            );
            done();
          }
        );
      });
    });
  });
  describe("document By Created Or UpdateDate", () => {
    describe("document By Created", () => {
      it("Document not found check", (done) => {
        const payload = {
          createdAt: "Tue Aug 09 2022 18:58:27 GMT+0530 (India Standard Time)",
        };
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.post(
          {
            url: `${baseUrl}/api/report/createdat`,
            headers,
            json: payload,
          },

          (_, response) => {
            // const res = JSON.parse(response);
            //   console.log("res.body", response);
            expect(response.body.message).to.equal("Document not found!");
            done();
          }
        );
      });
      it("Document found Success check", (done) => {
        const payload = {
          createdAt: "Wed Aug 10 2022 14:47:27 GMT+0530 (India Standard Time)",
        };
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.post(
          {
            url: `${baseUrl}/api/report/createdat`,
            headers,
            json: payload,
          },

          (_, response) => {
            // const res = JSON.parse(response);
            //   console.log("res.body", response);
            expect(response.body.message).to.equal(
              "Documnet Found SuccessFully!"
            );
            done();
          }
        );
      });
    });
    describe("document ByUpdateDate", () => {
      it("Document not found check", (done) => {
        const payload = {
          lastUpdatedAt:
            "Tue Aug 09 2022 18:58:27 GMT+0530 (India Standard Time)",
        };
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.post(
          {
            url: `${baseUrl}/api/report/createdat`,
            headers,
            json: payload,
          },

          (_, response) => {
            // const res = JSON.parse(response);
            //   console.log("res.body", response);
            expect(response.body.message).to.equal("Document not found!");
            done();
          }
        );
      });
      it("Document found Success check", (done) => {
        const payload = {
          lastUpdatedAt:
            "Wed Aug 10 2022 14:47:27 GMT+0530 (India Standard Time)",
        };
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.post(
          {
            url: `${baseUrl}/api/report/createdat`,
            headers,
            json: payload,
          },

          (_, response) => {
            // const res = JSON.parse(response);
            //   console.log("res.body", response);
            expect(response.body.message).to.equal(
              "Documnet Found SuccessFully!"
            );
            done();
          }
        );
      });
    });
  });
  describe("document Creater", () => {
    it("Invalid request body", (done) => {
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.post(
          {
            url: `${baseUrl}/api/report/creator`,
            headers,
          },

          (_, response) => {
            const res = JSON.parse(response.body);
            // console.log("res.body", res.message);
            expect(res.message).to.equal("Invalid request body");
            done();
          }
        );
      });
    it("Document not found check", (done) => {
        const payload = {
            creator:
              "Hari",
          };
      var headers = {
        Authorization: `bearer ${token}`,
      };
      request.post(
        {
          url: `${baseUrl}/api/report/creator`,
          headers,
          json: payload,
        },

        (_, response) => {
          // const res = JSON.parse(response);
          //   console.log("res.body", response);
          expect(response.body.message).to.equal("Document not found!");
          done();
        }
      );
    });
    it("Document found Success check", (done) => {
      const payload = {
        creator:
          "Hariom",
      };
      var headers = {
        Authorization: `bearer ${token}`,
      };
      request.post(
        {
          url: `${baseUrl}/api/report/creator`,
          headers,
          json: payload,
        },

        (_, response) => {
          // const res = JSON.parse(response);
          //   console.log("res.body", response);
          expect(response.body.message).to.equal(
            "Documnet Found SuccessFully!"
          );
          done();
        }
      );
    });
  });
});
