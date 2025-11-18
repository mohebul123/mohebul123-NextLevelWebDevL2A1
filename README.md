Q) What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

TypeScript এ Enums হল একটি বিশেষ ধরনের সেট যা সেটের নাম্বার বা স্ট্রিং কে নির্দিষ্ট করে দেয় বা এক যায়গায় রাখে|এটি কোড কে readable,maintainable এবং error free করতে সাহায্য করে|

Enum এর ব্যাবহার :-
১) Readable code : string সরাসরি code এ ব্যাবহার এর পরিবর্তে নাম দিয়ে ব্যাবহার করা যায় |
২) Type Saftey :শুধুমাত্র নির্দিষ্ট values ব্যাবহার করতে পারি , তাই ভুল হবার সম্ভাবনা থাকে না |
৩) Easy Maintenance : code base যদি অনেক বর হয় বা ভবিষ্যৎ এ যদি মান পরিবর্তন করতে হয় , শুধু enum এ পরিবর্তন করলে সম্পূর্ণ কোড আপডেট হয়ে যায় |

উদাহরণ :
enum userRoles {
Admin = "Admin",
Editor = "Editor",
Viewer = "Viewer",
}

const canEdit = (role: userRoles) =>{
if(role === userRoles.Admin)
return true;
else return false;
}

Q) Provide an example of using union and intersection types in TypeScript
TypeScript এ union এবং intersection types আমাদের টাইপ সেফ এবং ফ্লেক্সিবল কোড লিখতে সাহায্য করে।

---Union Type:-
Union type একটি variable বা function parameter-কে একাধিক type এর মধ্যে যেকোনো একটি হতে দেয় ,অর্থাৎ একটি না হলে অন্য টা ।

উদাহরণ:
type RoleType = 'admin' | 'user' | 'guest';
function getDashboard(role: RoleType){
if(role === 'admin')
return "admin dashboard";
else if(role === 'user')
return "user dashboard";
}
console.log(getDashboard('admin'));

-> এখানে role শুধুমাত্র 'admin ' অথবা 'user ' অথবা 'guest' হতে পারবে ,অন্য কিছু হতে পারবে না। যদি অন্য কিছু হয় তাহলে error দেখাবে |

---Intersection Type:-
Intersection type একাধিক type কে একসাথে করে নতুন type তৈরি করে, যাতে সব প্রপার্টি অবশই থাকতে হয়।

উদাহরণ:
type Employee = {
name:string;
id:number;
}

type Manager = {
designation: string;
teamSize:number;
}
type EmployeeManager = Employee & Manager;
const choudhurySaheb:EmployeeManager={
name:"Md Mohebul",
id:12,
designation:'manager',
teamSize:5
}

-> এখানে EmployeeManager এ Employee এবং Manager এর সবার প্রপার্টি থাকতে হবে | মূলত complex object তৈরি করার জন্য উপযোগী |
