export const todayKey = () => {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const yyyymmddToDate = (s) => {
  if (!s) return null;
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export const isYesterday = (dateStr) => {
  if (!dateStr) return false;
  const last = yyyymmddToDate(dateStr);
  const d = new Date();
  const yesterday = new Date(d);
  yesterday.setDate(d.getDate() - 1);
  return (
    last &&
    last.getFullYear() === yesterday.getFullYear() &&
    last.getMonth() === yesterday.getMonth() &&
    last.getDate() === yesterday.getDate()
  );
};
