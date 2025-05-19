import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { usePapaParse } from "react-papaparse";

export default function ExamSchedulerApp() {
  const [schedule, setSchedule] = useState([]);
  const { readString } = usePapaParse();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = ({ target }) => {
      readString(target.result, {
        header: true,
        complete: (results) => {
          const processedSchedule = processExamSchedule(results.data);
          setSchedule(processedSchedule);
        },
      });
    };
    reader.readAsText(file);
  };

  const processExamSchedule = (data) => {
    // Mock function - replace with actual scheduling logic
    return data.map((exam, index) => ({
      day: Math.ceil((index + 1) / 3),
      course: exam.Course,
      room: "Room A",
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Exam Scheduler</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} className="mb-4" />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Room</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((exam, index) => (
            <TableRow key={index}>
              <TableCell>{exam.day}</TableCell>
              <TableCell>{exam.course}</TableCell>
              <TableCell>{exam.room}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className="mt-4">Print Schedule</Button>
    </div>
  );
}
