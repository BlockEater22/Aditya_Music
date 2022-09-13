const expect = require("chai").expect;
const chai = require("chai");
const path = require("path");
const chaiHttp = require("chai-http");
supertest = require("supertest");
var request = supertest("localhost:8080");
// const basedir = ("./testImages");

chai.use(chaiHttp);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjIxMzczYmEyYzUxZTNiNjY1ZDE2NyIsImZ1bGxfbmFtZSI6IkhhcmlvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY2MDE0NDU2MiwiZXhwIjoxNjYwMjMwOTYyfQ.4TNIOzrJqcE66PI9lCamRu52rDVYwCvQzxOxLik71cY";

describe("Content module Tests", () => {
    describe("/Get get All Content", () => {
      // // this will be true if no data found
      it("no data found validation", (done) => {
        var headers = {
          'Authorization': `bearer ${token}`,
        };
        request.get("/api/content")
        .set(headers)
        .end((_, response) => {

              //  console.log("res.body",(response.body.message))
            expect(response.body.message).to.equal("Content not found!");
            done();
          }
        );
      });

      // //this will be true if data found
      it("data found validation", (done) => {
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request
          .get("/api/content")
          .set(headers)
          .end((_, response) => {
            //  console.log("res.body",(response.body.message))
            expect(response.body.message).to.equal("Content");
            done();
          });
      });
    });

    
    
   // // POST ADD content APi check
    describe("/Post add Content", () => {
      it("Please fill all details validation", (done) => {
        // const payload
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request
          .post("/api/content")
          .set(headers)

          .end((_, response) => {
            //   console.log("res.body", response.body);
            expect(response.body.message).to.equal("Please fill all details!");
            done();
          });
      });
      it("Data found validation", (done) => {
        // const payload
        var headers = {
          Authorization: `bearer ${token}`,
        };
        let file = {
          fileName: "download.jpg",
      }
        request
          .post("/api/content")
          .set(headers)
          .field("Content-Type", "multipart/form-data")
          .field("name", "holla")
          .field("category", "image")
          .field('fileName', 'download.jpg')
          .attach("image", path.resolve(__dirname,"./testImages/images.jpg"))

          .end((_, response) => {
            console.log("res.body", response.body.message);
            expect(response.body.message).to.equal("Content Added successfully");
            done();
          });
      });
    });

  //  // Update content api test scripts
  describe("/Put Update Content", () => {
    it("Please fill all details validation", (done) => {
      const payload = {
        name: "huhuhu",
        category: "image",
      };
      var headers = {
        Authorization: `bearer ${token}`,
      };
      request
        .put("/api/content/62f240980e1e592c5ca3caa8")
        .set(headers)
        // .set(payload)

        .end((_, response) => {
          console.log("res.body", response.body.message);
          expect(response.body.message).to.equal("Invalid content");
          done();
        });
    });
    it("Something Went Wrong validation", (done) => {
        const payload = {
          name: "huhuhuhua",
          category: "image",
        };
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request
          .put("/api/content/62f240980e1e592c5ca3caa")
          .set(headers)
  
          .field("name", "huhuhuhua")
          .field("category", "image")
  
          .end((_, response) => {
            console.log("res.body", response.body.message);
            expect(response.body.message).to.equal("Something went wrong");
            done();
          });
      });
    it("Update Success", (done) => {
      const payload = {
        name: "huhuhuhua",
        category: "image",
      };
      var headers = {
        Authorization: `bearer ${token}`,
      };
      request
        .put("/api/content/62f240980e1e592c5ca3caa7")
        .set(headers)

        .field("name", "huhuhuhua")
        .field("category", "image")

        .end((_, response) => {
          console.log("res.body", response.body.data);
          expect(response.body.message).to.equal(
            "Content updated successfully"
          );
          done();
        });
    });
    
  });

  describe("/Delete Delete Content", () => {
    it("Please fill all details validation", (done) => {
      const payload = {
        name: "huhuhu",
        category: "image",
      };
      var headers = {
        Authorization: `bearer ${token}`,
      };
      request
        .delete("/api/content/62f240980e1e592c5ca3caa8")
        .set(headers)
        // .set(payload)

        .end((_, response) => {
          console.log("res.body", response.body.message);
          expect(response.body.message).to.equal("Invalid content");
          done();
        });
    });
    it("Something Went Wrong validation", (done) => {
        const payload = {
          name: "huhuhuhua",
          category: "image",
        };
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request
          .delete("/api/content/62f240980e1e592c5ca3caa")
          .set(headers)
  
          .field("name", "huhuhuhua")
          .field("category", "image")
  
          .end((_, response) => {
            console.log("res.body", response.body.message);
            expect(response.body.message).to.equal("Something went wrong");
            done();
          });
      });
    it("Update Success", (done) => {
      var headers = {
        Authorization: `bearer ${token}`,
      };
      request
        .delete("/api/content/62f240980e1e592c5ca3caa7")
        .set(headers)


        .end((_, response) => {
          console.log("res.body", response.body);
          expect(response.body.message).to.equal(
            "Content deleted successfully"
          );
          done();
        });
    });
});
})
