interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={
            category === selected
              ? "bg-blue-500 text-white px-3 py-1 rounded"
              : "bg-gray-200 px-3 py-1 rounded"
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
