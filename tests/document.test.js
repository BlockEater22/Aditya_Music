const expect = require("chai").expect;

const request = require("request");

const baseUrl = "http://localhost:8080";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjIxMzczYmEyYzUxZTNiNjY1ZDE2NyIsImZ1bGxfbmFtZSI6IkhhcmlvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY2MDExMzA0OCwiZXhwIjoxNjYwMTk5NDQ4fQ.ola7yMjQsl10K5MHSjbWOjSPtBsdlSy6O0L_S0CHaNc";

describe("Document Module test", () => {
    describe("Album Acquisition Agreement DocumentType", () => {
      describe("Validation Check", () => {
        it("DocumentName validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            // documentName:"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },
            //   {
            //     json: payload,
            //   },
            (_, response) => {
              //   console.log("res.body", response.body);
              expect(response.body.message).to.equal("DocumentName is Required!");
              done();
            }
          );
        });

        it("agreementStartDate Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            //   agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "agreementStartDate is Required!"
              );
              done();
            }
          );
        });

        it("agreementEndDate Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            // agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "agreementEndDate is Required!"
              );
              done();
            }
          );
        });

        it("rightName Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            // rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal("rightName is Required!");
              done();
            }
          );
        });

        it("rightStartDate Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            // rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "rightStartDate is Required!"
              );
              done();
            }
          );
        });

        it("rightEndDate Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            // rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal("rightEndDate is Required!");
              done();
            }
          );
        });

        it("rightExclusivity Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            // rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "rightExclusivity is Required!"
              );
              done();
            }
          );
        });

        it("rightTerritories Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            // rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "rightTerritories is Required!"
              );
              done();
            }
          );
        });

        it("rightLanguages Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            //   rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "rightLanguages is Required!"
              );
              done();
            }
          );
        });
        it("rightDubbing Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            //   rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal("rightDubbing is Required!");
              done();
            }
          );
        });
        it("rightRepurposingRights Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            // rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "rightRepurposingRights is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsStartDate Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            // exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsStartDate is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsEndDate Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            // exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsEndDate is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsExclusivity Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            // exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsExclusivity is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsTerritories Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            // exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsTerritories is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsLanguages Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            // exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsLanguages is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsDubbing Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            // exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsDubbing is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsRepurposingRights Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            //   exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.post(
            {
              url: `${baseUrl}/api/document`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsRepurposingRights is Required!"
              );
              done();
            }
          );
        });
        describe("document Name Length check", () => {
          it("DocumentName Length Validation Check", (done) => {
            const payload = {
              documentType: "Album Acquisition Agreement",
              documentName:
                "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
              agreementStartDate: "22/07/2022",
              agreementEndDate: "22/07/2023",
              rightName: "abc",
              rightStartDate: "23/07/2022",
              rightEndDate: "23/08/2022",
              rightExclusivity: "mshe",
              rightTerritories: "myown",
              rightLanguages: "telegu,tamil,kanada",
              rightDubbing: "yes",
              rightRepurposingRights: "yes",
              exclusionsStartDate: "22/07/21",
              exclusionsEndDate: "22/08/22",
              exclusionsExclusivity: "yes",
              exclusionsTerritories: "no",
              exclusionsLanguages: "no",
              exclusionsDubbing: "yes",
              exclusionsRepurposingRights: "hehhe",
            };
            var headers = {
              Authorization: `bearer ${token}`,
            };
            request.post(
              {
                url: `${baseUrl}/api/document`,
                headers,
                json: payload,
              },

              (_, response) => {
                // console.log("res.body", response.body);
                expect(response.body.message).to.equal("Max length is 48");
                done();
              }
            );
          });
        });
          it("Event added successfully", (done) => {
            const payload = {
              documentType: "Album Acquisition Agreement",
              documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
              agreementStartDate: "22/07/2022",
              agreementEndDate: "22/07/2023",
              rightName: "abc",
              rightStartDate: "23/07/2022",
              rightEndDate: "23/08/2022",
              rightExclusivity: "mshe",
              rightTerritories: "myown",
              rightLanguages: "telegu,tamil,kanada",
              rightDubbing: "yes",
              rightRepurposingRights: "yes",
              exclusionsStartDate: "22/07/21",
              exclusionsEndDate: "22/08/22",
              exclusionsExclusivity: "yes",
              exclusionsTerritories: "no",
              exclusionsLanguages: "no",
              exclusionsDubbing: "yes",
              exclusionsRepurposingRights: "hehhe",
            };
            var headers = {
              Authorization: `bearer ${token}`,
            };
            request.post(
              {
                url: `${baseUrl}/api/document`,
                headers,
                json: payload,
              },

              (_, response) => {
                // console.log("res.body", response.body);
                expect(response.body.message).to.equal("Event added successfully");
                done();
              }
            );
          });
      });
    });

    // //Deleting Document Api check
  describe("Deleting Api check", () => {
    describe("validation check", () => {
      it("invalid content check", () => {
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.delete(
          {
            url: `${baseUrl}/api/document/62f3678129376db0cbc31bb1`,
            headers,
          },

          (_, response) => {
            const res = JSON.parse(response.body);
            console.log("res.body", res.message);
            expect(res.message).to.equal("Invalid content");
            done();
          }
        );
      });

      it("Delete success", () => {
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.delete(
          {
            url: `${baseUrl}/api/document/62f2634661a2e59b64397d4d`,
            headers,
          },

          (_, response) => {
            console.log("res.body", response.body);
            expect(response.message).to.equal("Document deleted successfully");
            done();
          }
        );
      });
    });
  });

    // //Document Update Api check
    describe("Update Api check", () => {
      describe("Album Acquisition Agreement DocumentType", () => {
        it("DocumentName validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            // documentName:"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              //   console.log("res.body", response.body);
              expect(response.body.message).to.equal("DocumentName is Required!");
              done();
            }
          );
        });

        it("agreementStartDate Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            //   agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "agreementStartDate is Required!"
              );
              done();
            }
          );
        });

        it("agreementEndDate Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            // agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "agreementEndDate is Required!"
              );
              done();
            }
          );
        });

        it("rightName Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            // rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal("rightName is Required!");
              done();
            }
          );
        });

        it("rightStartDate Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            // rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "rightStartDate is Required!"
              );
              done();
            }
          );
        });

        it("rightEndDate Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            // rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal("rightEndDate is Required!");
              done();
            }
          );
        });

        it("rightExclusivity Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            // rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "rightExclusivity is Required!"
              );
              done();
            }
          );
        });

        it("rightTerritories Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            // rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "rightTerritories is Required!"
              );
              done();
            }
          );
        });

        it("rightLanguages Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            //   rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "rightLanguages is Required!"
              );
              done();
            }
          );
        });
        it("rightDubbing Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            //   rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal("rightDubbing is Required!");
              done();
            }
          );
        });
        it("rightRepurposingRights Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            // rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "rightRepurposingRights is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsStartDate Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            // exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsStartDate is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsEndDate Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            // exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsEndDate is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsExclusivity Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            // exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsExclusivity is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsTerritories Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            // exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsTerritories is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsLanguages Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            // exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsLanguages is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsDubbing Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            // exclusionsDubbing: "yes",
            exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsDubbing is Required!"
              );
              done();
            }
          );
        });
        it("exclusionsRepurposingRights Validation Check", (done) => {
          const payload = {
            documentType: "Album Acquisition Agreement",
            documentName: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            agreementStartDate: "22/07/2022",
            agreementEndDate: "22/07/2023",
            rightName: "abc",
            rightStartDate: "23/07/2022",
            rightEndDate: "23/08/2022",
            rightExclusivity: "mshe",
            rightTerritories: "myown",
            rightLanguages: "telegu,tamil,kanada",
            rightDubbing: "yes",
            rightRepurposingRights: "yes",
            exclusionsStartDate: "22/07/21",
            exclusionsEndDate: "22/08/22",
            exclusionsExclusivity: "yes",
            exclusionsTerritories: "no",
            exclusionsLanguages: "no",
            exclusionsDubbing: "yes",
            //   exclusionsRepurposingRights: "hehhe",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal(
                "exclusionsRepurposingRights is Required!"
              );
              done();
            }
          );
        });
        describe("document Name Length check", () => {
          it("DocumentName Length Validation Check", (done) => {
            const payload = {
              documentType: "Album Acquisition Agreement",
              documentName:
                "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
              agreementStartDate: "22/07/2022",
              agreementEndDate: "22/07/2023",
              rightName: "abc",
              rightStartDate: "23/07/2022",
              rightEndDate: "23/08/2022",
              rightExclusivity: "mshe",
              rightTerritories: "myown",
              rightLanguages: "telegu,tamil,kanada",
              rightDubbing: "yes",
              rightRepurposingRights: "yes",
              exclusionsStartDate: "22/07/21",
              exclusionsEndDate: "22/08/22",
              exclusionsExclusivity: "yes",
              exclusionsTerritories: "no",
              exclusionsLanguages: "no",
              exclusionsDubbing: "yes",
              exclusionsRepurposingRights: "hehhe",
            };
            var headers = {
              Authorization: `bearer ${token}`,
            };
            request.put(
              {
                url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
                headers,
                json: payload,
              },

              (_, response) => {
                // console.log("res.body", response.body);
                expect(response.body.message).to.equal("Max length is 48");
                done();
              }
            );
          });
        });
        // it("Event added successfully", (done) => {
        //   const payload = {
        //     documentType: "Album Acquisition Agreement",
        //     documentName: "hhhhhhhhhhhhhhhhhhhhhhhhh",
        //     agreementStartDate: "22/07/2022",
        //     agreementEndDate: "22/07/2023",
        //     rightName: "abc",
        //     rightStartDate: "23/07/2022",
        //     rightEndDate: "23/08/2022",
        //     rightExclusivity: "mshe",
        //     rightTerritories: "myown",
        //     rightLanguages: "telegu,tamil,kanada",
        //     rightDubbing: "yes",
        //     rightRepurposingRights: "yes",
        //     exclusionsStartDate: "22/07/21",
        //     exclusionsEndDate: "22/08/22",
        //     exclusionsExclusivity: "yes",
        //     exclusionsTerritories: "no",
        //     exclusionsLanguages: "no",
        //     exclusionsDubbing: "yes",
        //     exclusionsRepurposingRights: "hehhe",
        //   };
        //   var headers = {
        //     Authorization: `bearer ${token}`,
        //   };
        //   request.put(
        //     {
        //       url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
        //       headers,
        //       json: payload,
        //     },

        //     (_, response) => {
        //       // console.log("res.body", response.body);
        //       expect(response.body.message).to.equal("Document updated successfully");
        //       done();
        //     }
        //   );
        // });
      });

      // either run this or above code
      describe("Other Documnet Type", () => {
        it("exclusionsRepurposingRights Validation Check", (done) => {
          const payload = {
            documentType: "Audio Sync Agreements",
            // documentName:
            //   "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal("DocumentName is Required!");
              done();
            }
          );
        });
        it("exclusionsRepurposingRights Validation Check", (done) => {
          const payload = {
            //   documentType: "Audio Sync Agreements",
            documentName:
              "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal("DocumentType is Required!");
              done();
            }
          );
        });
        it("DocumentName Length Validation Check", (done) => {
          const payload = {
            documentType: "Audio Sync Agreements",
            documentName:
              "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal("Max length is 48");
              done();
            }
          );
        });
        it("Invalid document Validation Check", (done) => {
          const payload = {
            documentType: "Audio Sync Agreements",
            documentName:
              "qqqqqqqqqqqqqqqqqqqqqqqqqqq",
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4edf`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal("Invalid document");
              done();
            }
          );
        });

         it("Event added successfully", (done) => {
          const payload = {
            documentType: "Audio Sync Agreements",
            documentName: "hhhhhhhhhhhhhhdfdffjhgh"
          };
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.put(
            {
              url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
              headers,
              json: payload,
            },

            (_, response) => {
              // console.log("res.body", response.body);
              expect(response.body.message).to.equal("Document updated successfully");
              done();
            }
          );
        });
      });
    });

  // //Get all Document  Api test
    describe("getallDocument Api check", () => {
      describe("Checking Validation check", () => {
      //  this will pass the test if document is not present
      //   it("no data dound validation", (done) => {
      //     var headers = {
      //       Authorization: `bearer ${token}`,
      //     };
      //     request.get(
      //       {
      //         url: `${baseUrl}/api/document`,
      //         headers,
      //       },
      //       (_, response) => {
      //         const res = JSON.parse(response.body)
      //         console.log("res.body", res.message);
      //         expect(res.message).to.equal("Document not found!");
      //         done();
      //       }
      //     );
      //   });
  //     //  this will pass the test if document is present

      it("data found validation", (done) => {
          var headers = {
            Authorization: `bearer ${token}`,
          };
          request.get(
            {
              url: `${baseUrl}/api/document`,
              headers,
            },
            (_, response) => {
              const res = JSON.parse(response.body)
              console.log("res.body", res);
              expect(res.message).to.equal("Documnet Found SuccessFully!");
              done();
            }
          );
        });
      });
    });

  // get single document
  describe("Get Single Document by id check", () => {
    describe("validation check", () => {
      it("data found validation", (done) => {
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.get(
          {
            url: `${baseUrl}/api/document/62f36085ded2d2893c9b4edd`,
            headers,
          },
          (_, response) => {
            const res = JSON.parse(response.body);
            // console.log("res.body", res);
            expect(res.message).to.equal("Document not found!");
            done();
          }
        );
      });
      it("data found validation", (done) => {
        var headers = {
          Authorization: `bearer ${token}`,
        };
        request.get(
          {
            url: `${baseUrl}/api/document/62f36085ded2d2893c9b4ede`,
            headers,
          },
          (_, response) => {
            const res = JSON.parse(response.body)
            // console.log("res.body", res);
            expect(res.message).to.equal("Documnet Found SuccessFully!");
            done();
          }
        );
      }); 
    });
  });
});
