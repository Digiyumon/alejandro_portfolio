import { useEffect, useState } from "preact/hooks";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
    const updateProgress = () => {
      console.log("updateProgress called");
      const now = new Date();
      const lastBday = new Date(now.getFullYear() - 1, 5, 20);
      const targetDate = new Date(now.getFullYear(), 5, 20); // January 18th
      //debugger;
      // If past January 18th, reset for next year
      if (now > targetDate) {
        targetDate.setFullYear(now.getFullYear() + 1);
        lastBday.setFullYear(now.getFullYear());
      }

      // Calculate progress as percentage
      const elapsed = now.getTime() - lastBday.getTime();
      const total = targetDate.getTime() - lastBday.getTime();
      const percentage = Math.min((elapsed / total) * 100, 100);

      setProgress(percentage);
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000 * 60 * 60); // Update hourly

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "200px",
        height: "15px",
        backgroundColor: "#68696b",
        border: "3px solid #cdcbcc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#eec0c0",
          marginTop: "3px",
          transform: "translateY(-3px)",
        }}
      />
    </div>
  );
};

export default ProgressBar;
