use("commerce");

db.products.updateOne(
{ sub: "maths" },
{ $set: { rollno: 99 } }
);