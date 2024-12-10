import { useState } from "react";
import { useEffect } from "react";

interface Program {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  country: string;
  year: number;
}

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => {
        setPrograms(data);
      });
  }, []);

  return (
    <div>
      <h1>Programs</h1>
      <ul className="prog">
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <img src={program.poster} alt={program.title} />
            <p>{program.synopsis}</p>
            <p>
              <strong>Country:</strong> {program.country}
            </p>
            <p>
              <strong>Year:</strong> {program.year}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Programs;
