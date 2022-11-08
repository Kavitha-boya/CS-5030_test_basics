const request = require("supertest");

const app = require("./index");

describe("todo api test suite", () => {
   
    test("GET /",(done)=>{
        request(app).get("/todolist")
                    .expect('Content-Type', /json/)
                    .expect(200)
                    // .expect(res.body.todo.length).toEqual(3)
                    .end((err, res)=>{
                        if(err) return done(err);
                        
                        return done();
                    })
});
});

describe("add todo api test suite", () => {
   test("POST /", (done) => {
      const todo = {
         "title": "T1"
         "description": "D1"
         "done": false
      };
      request(app).post("/addtodolist").send(todo)
          .expect('Content-Type', /json/)
          .expect(200)
          // .expect(res.body.todo.length).toEqual(3)
          .end((err, res) => {
              if (err) return done(err);
              return done();
      })
   });
});   
      
