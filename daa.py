import networkx as nx
import random

def schedule_exams(courses, students, rooms, max_exams_per_day=3):
    G = nx.Graph()
    
    # Create conflict graph where an edge means shared students
    for course in courses:
        G.add_node(course)
    
    for student in students:
        for i in range(len(student) - 1):
            for j in range(i + 1, len(student)):
                G.add_edge(student[i], student[j])
    
    # Color the graph (each color represents a time slot)
    exam_schedule = nx.coloring.greedy_color(G, strategy="largest_first")
    
    # Group exams by time slot
    time_slots = {}
    for course, slot in exam_schedule.items():
        if slot not in time_slots:
            time_slots[slot] = []
        time_slots[slot].append(course)
    
    # Assign rooms fairly
    final_schedule = {}
    day = 1
    slot_count = 0
    
    for slot in sorted(time_slots.keys()):
        if slot_count >= max_exams_per_day:
            day += 1
            slot_count = 0
        
        final_schedule[day] = final_schedule.get(day, []) + [(course, random.choice(rooms)) for course in time_slots[slot]]
        slot_count += 1
    
    return final_schedule

# Example Usage
courses = ["Math", "Physics", "CS", "Chemistry", "Biology", "History"]
students = [["Math", "Physics"], ["CS", "Math"], ["History", "Biology"], ["CS", "Chemistry"]]
rooms = ["Room A", "Room B", "Room C"]

schedule = schedule_exams(courses, students, rooms)
for day, exams in schedule.items():
    print(f"Day {day}:")
    for exam, room in exams:
        print(f"  {exam} in {room}")
