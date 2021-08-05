
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Solar({dataGiven}) {
    return <ResponsiveContainer width="90%" height="70%">
    <LineChart
      width={500}
      height={200}
      data={dataGiven}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Time1" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="generation_mw" stroke="#8884d8" activeDot={{ r: 8 }}  />
     </LineChart>
  </ResponsiveContainer>
}

export default Solar