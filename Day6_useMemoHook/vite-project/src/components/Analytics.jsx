import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';
import { useMemo } from 'react';

const Analytics = () => {
    const { state } = useContext(TaskContext);
    const { tasks, members } = state;

    const stats = useMemo(()=>{
        console.log("Calculating Analytics");
        const total = tasks.length;
        const avg = members.length ? (total/members.length).toFixed(1) : 0;

        // most active member
        const counts = {}
        tasks.forEach((task) => counts[task.assignee] = ( counts[task.assignee] || 0) + 1);
        let mostActive = "None";
        let max = 0;
        for(const name in counts){
            if(counts[name] > max){
                max = counts[name];
                mostActive = name;
            }
        }
        return {total, avg, mostActive};
    }, [tasks, members]);

  return (
    <div style={{ background: "#eee", padding: "15px", borderRadius: "8px" }}>
      <h3>📊 Analytics</h3>
      <p>Total Tasks: {stats.total}</p>
      <p>Average per Member: {stats.avg}</p>
      <p>Most Active Member: <b>{stats.mostActive}</b></p>
    </div>
  )
}

export default Analytics
