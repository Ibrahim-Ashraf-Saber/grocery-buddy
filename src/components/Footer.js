export default function Footer({ items }) {
  if (items.length === 0)
    return <footer className="footer">No tasks yet. Let's get started!</footer>;

  const itemsNum = items.length;
  const boughtItemsNum = items.filter((item) => item.bought).length;
  const percent = Math.round((boughtItemsNum / itemsNum) * 100);
  return (
    <footer className="footer">
      {percent === 100
        ? "🎉 Great job! You’ve completed all your tasks for today."
        : `🛒 You have completed ${boughtItemsNum}/${itemsNum} items (${percent}%) in your Grocery Buddy.`}
    </footer>
  );
}
