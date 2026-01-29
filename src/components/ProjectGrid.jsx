// // src/components/ProjectGrid.jsx
// export const ProjectGrid = ({ items = [], category, onItemClick }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {items.map((item, index) => {
//         const aspect =
//           category === "instagram"
//             ? "aspect-[4/5]"
//             : "aspect-video";

//         return (
//           <button
//             key={item.id}
//             onClick={() => onItemClick(index)}
//             className="group relative overflow-hidden rounded-3xl bg-neutral-900 text-left cursor-pointer"
//           >
//             <div className={`${aspect} overflow-hidden`}>
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//             </div>

//             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

//             <div className="absolute bottom-4 left-4 right-4 text-white">
//               <p className="text-lg font-medium">{item.title}</p>
//               <p className="text-sm text-white/70">{item.brand}</p>
//             </div>
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// src/components/ProjectGrid.jsx
export const ProjectGrid = ({
  items = [],          // 👈 default value
  category,
  onItemClick = () => {}
}) => {
  if (!items.length) {
    return (
      <div className="text-white/60 py-20 text-center">
        No projects found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, index) => {
        const aspect =
          category === "instagram"
            ? "aspect-[4/5]"
            : "aspect-video";

        return (
          <button
            key={item.id}
            onClick={() => onItemClick(index)}
            className="group relative overflow-hidden rounded-3xl bg-neutral-900 text-left cursor-pointer"
          >
            <div className={`${aspect} overflow-hidden`}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-lg font-medium">{item.title}</p>
              {item.brand && (
                <p className="text-sm text-white/70">{item.brand}</p>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};
