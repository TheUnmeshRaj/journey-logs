# ExamScheduler

## Overview
ExamScheduler is an optimized university exam scheduling system that ensures:
- No student has conflicting exams.
- Minimal exam days to reduce administrative costs.
- Efficient room allocation for fair distribution.

## Features
- Conflict-free scheduling using graph coloring.
- Smart room assignment.
- Efficient exam day minimization.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/ExamSchedulerX.git
   cd ExamSchedulerX
   ```
2. Install dependencies:
   ```sh
   pip install networkx
   ```

## Usage
Modify the `courses`, `students`, and `rooms` lists in `schedule_exams.py`, then run:
```sh
python schedule_exams.py
```

## Example Output
```
Day 1:
  Math in Room A
  Physics in Room B
Day 2:
  CS in Room C
  Chemistry in Room A
```

## Contributing
1. Fork the repo
2. Create a new branch
3. Submit a pull request

## License
MIT License

