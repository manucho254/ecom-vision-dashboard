const customers = [
  {
    id: 121,
    name: "manucho",
    email: "test@a.com",
    phone_number: "+25476263629",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 122,
    name: "bob",
    email: "test@b.com",
    phone_number: "+25476263629",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 123,
    name: "simon",
    email: "test@c.com",
    phone_number: "+25476263629",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 124,
    name: "amos",
    email: "test@d.com",
    phone_number: "+25476263629",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 125,
    name: "brandon",
    email: "test@e.com",
    phone_number: "+25476263629",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 126,
    name: "elizabeth",
    email: "test@f.com",
    phone_number: "+25476263629",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 127,
    name: "sofia",
    email: "test@g.com",
    phone_number: "+25476263629",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 128,
    name: "jackline",
    email: "test@h.com",
    phone_number: "+25476263629",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 129,
    name: "patrick",
    email: "test@i.com",
    phone_number: "+25476263629",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 130,
    name: "mary",
    email: "test@g.com",
    phone_number: "+25476263629",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
];

const products = [
  {
    id: 120,
    name: "basket",
    customer: "bob",
    cost: 230,
    createdAt: new Date().toISOString(),
  },
  {
    id: 120,
    name: "basket",
    customer: "bob",
    cost: 230,
    createdAt: new Date().toISOString(),
  },
  {
    id: 120,
    name: "basket",
    customer: "bob",
    cost: 230,
    createdAt: new Date().toISOString(),
  },
  {
    id: 120,
    name: "basket",
    customer: "bob",
    cost: 230,
    createdAt: new Date().toISOString(),
  },
];

const admins = [
  {
    id: 121,
    name: "manucho",
    email: "test1@admin.com",
    phone_number: "+25476263629",
    country: "KE",
    role: "admin",
  },
  {
    id: 122,
    name: "bob",
    email: "test2@admin.com",
    phone_number: "+25476263629",
    country: "KE",
    role: "admin",
  },
  {
    id: 123,
    name: "simon",
    email: "test3@admin.com",
    phone_number: "+25476263629",
    country: "KE",
    role: "admin",
  },
  {
    id: 124,
    name: "amos",
    email: "test4@admin.com",
    phone_number: "+25476263629",
    country: "KE",
    role: "admin",
  },
  {
    id: 125,
    name: "brandon",
    email: "test5@admin.com",
    phone_number: "+25476263629",
    country: "KE",
    role: "admin",
  },
  {
    id: 126,
    name: "elizabeth",
    email: "test6@admin.com",
    phone_number: "+25476263629",
    country: "KE",
    role: "admin",
  },
  {
    id: 127,
    name: "sofia",
    email: "test7@admin.com",
    phone_number: "+25476263629",
    country: "KE",
    occupation: "Developer",
    role: "admin",
  },
  {
    id: 128,
    name: "jackline",
    email: "test8@admin.com",
    phone_number: "+25476263629",
    country: "KE",
    role: "admin",
  },
  {
    id: 129,
    name: "patrick",
    email: "test9@admin.com",
    phone_number: "+25476263629",
    country: "KE",
    role: "admin",
  },
  {
    id: 130,
    name: "mary",
    email: "test10@admin.com",
    phone_number: "+25476263629",
    country: "KE",
    role: "admin",
  },
];

const transactions = [
  {
    id: 121,
    transaction_id: "SxhsyehsJ#",
    customer: "bob",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 122,
    transaction_id: "SxhsyehsJ#",
    customer: "bob",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 123,
    transaction_id: "SxhsyehsJ#",
    customer: "bran",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 123,
    transaction_id: "SxhsyehsJ#",
    customer: "sam",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 124,
    transaction_id: "SxhsyehsJ#",
    customer: "kev",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 125,
    transaction_id: "SxhsyehsJ#",
    customer: "elizabeth",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 126,
    transaction_id: "SxhsyehsJ#",
    customer: "mary",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 127,
    transaction_id: "SxhsyehsJ#",
    customer: "brandon",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
  {
    id: 128,
    transaction_id: "SxhsyshehsJ#",
    customer: "bob",
    country: "KE",
    createdAt: new Date().toISOString(),
  },
];

export { customers, products, admins, transactions };
