// "use client";

// import React, { useEffect } from "react";
// import { useForm } from "@refinedev/react-hook-form";
// import FormControlWrapper from "@components/Forms/FormControlWrapper";
// import DatePicker from "@components/Input/DatePicker";
// import Dropdown from "@components/Input/Dropdown";
// import TextInput from "@components/Input/TextInput";
// import { Create } from "@refinedev/mui";
// import Link from "next/link";
// import ArrowIcon from "@/assets/icons/arrow.svg?icon";

// const TransactionCreate = () => {
//   const {
//     saveButtonProps,
//     handleSubmit,
//     control,
//     reset,
//     formState: { errors },
//   } = useForm();

//   return (
//     <Create
//       goBack={
//         <Link
//           href={"/transactions"}
//           className="inline-block mx-2 p-2 rounded-xl border duration-500 border-transparent hover:border-black"
//         >
//           <ArrowIcon />
//         </Link>
//       }
//       breadcrumb={false}
//       wrapperProps={{className: "pt-6"}}
//       title={
//         <div className="!font-satoshi text-xl font-semibold text-black flex items-center">
//           Create Transaction
//         </div>
//       }
//       saveButtonProps={{...saveButtonProps}}
//     >
//       <div className="bg-white px-8 rounded-xl">
//         <div className="grid grid-cols-2 gap-x-4 gap-y-2">
//           <FormControlWrapper
//             name="organization"
//             control={control}
//             rules={{ required: "Please enter your organization!" }}
//             error={errors.organization?.message?.toString()}
//           >
//             {(field) => (
//               <TextInput
//                 {...field}
//                 label="Organization"
//                 placeholder="Enter your organization"
//                 disabled={false}
//               />
//             )}
//           </FormControlWrapper>

//           <FormControlWrapper
//             name="date"
//             control={control}
//             rules={{ required: "Please select a date!" }}
//             error={errors.date?.message?.toString()}
//           >
//             {(field) => (
//               <DatePicker
//                 {...field}
//                 label="Date"
//                 placeholder="Select a date"
//                 disabled={false}
//               />
//             )}
//           </FormControlWrapper>

//           <FormControlWrapper
//             name="dropdown"
//             control={control}
//             rules={{ required: "Please select an option!" }}
//             error={errors.dropdown?.message?.toString()}
//           >
//             {(field) => (
//               <Dropdown
//                 {...field}
//                 label="Dropdown"
//                 placeholder="Select option"
//                 disabled={false}
//                 options={[
//                   { value: "a", label: "a" },
//                   { value: "b", label: "b" },
//                   { value: "c", label: "c" },
//                   { value: "d", label: "d" },
//                 ]}
//               />
//             )}
//           </FormControlWrapper>
//         </div>
//       </div>
//     </Create>
//   );
// };

// export default TransactionCreate;
