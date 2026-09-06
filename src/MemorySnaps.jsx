// import { useState } from "react";
// import { Images } from "lucide-react";

// const snaps = [
//   {
//     image: "/snaps/dep.jpeg",
//     message: "Remember this day? ❤️",
//   },
//   {
//     image: "/snaps/2.jpg",
//     message: "One more memory unlocked 😊",
//   },
//   {
//     image: "/snaps/3.jpg",
//     message: "Good old training days 💙",
//   },
//   {
//     image: "/snaps/4.jpg",
//     message: "Miss these moments already 🥹",
//   },
//   {
//     image: "/snaps/5.jpg",
//     message: "Some memories never fade ❤️",
//   },
// ];

// export default function MemorySnaps() {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(null);

//   return (
//     <>
//       {/* Floating Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[3px] shadow-2xl"
//       >
//         <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-[#002b5c]">
//           <Images size={30} className="text-pink-600" />
//         </div>
//       </button>

//       {/* Gallery */}
//       {open && (
//         <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl bg-white dark:bg-[#002b5c] shadow-2xl p-4">
//           <h2 className="mb-4 text-lg font-bold dark:text-white">
//             📸 Memories
//           </h2>

//           <div className="grid grid-cols-3 gap-3">
//             {snaps.map((snap, index) => (
//               <img
//                 key={index}
//                 src={snap.image}
//                 onClick={() => setSelected(snap)}
//                 className="h-24 w-full cursor-pointer rounded-xl object-cover hover:scale-105 transition"
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Fullscreen */}
//       {selected && (
//         <div
//           onClick={() => setSelected(null)}
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur"
//         >
//           <div className="max-w-2xl rounded-2xl bg-white dark:bg-[#002b5c] overflow-hidden">
//             <img
//               src={selected.image}
//               className="max-h-[70vh] w-full object-cover"
//             />

//             <p className="p-5 text-center dark:text-white">
//               {selected.message}
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }