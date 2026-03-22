"use client";
import { useEffect, useState } from "react";
import { getCategories } from "../services/eventService";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
      setLoading(false);
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div style={styles.loadingText}>Đang tải dữ liệu từ Supabase...</div>
    );
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.heading}>Lào Cai Event Hub</h1>

      <div style={styles.card}>
        <h2 style={styles.subHeading}>Danh mục sự kiện:</h2>

        {categories.length === 0 ? (
          <p style={{ color: "#9ca3af" }}>Chưa có dữ liệu danh mục nào.</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {categories.map((cat) => (
              <li key={cat.id} style={styles.listItem}>
                • {cat.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e5e7eb",
    maxWidth: "500px",
  },
  subHeading: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#374151",
  },
  listItem: {
    fontSize: "16px",
    padding: "8px 0",
    color: "#4b5563",
    borderBottom: "1px solid #f3f4f6",
  },
  loadingText: {
    padding: "40px",
    textAlign: "center",
    fontSize: "18px",
    color: "#6b7280",
  },
};
