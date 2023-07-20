import { ResponsiveContainer, Tooltip, Area, AreaChart, XAxis } from 'recharts'
import { DataProps } from '../..'

export interface LineChartProps {
  data: DataProps[]
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: { value: string }[]
  label?: string
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col justify-start gap-1 rounded-md border border-slate-875 bg-slate-855 p-4 shadow-md">
        <span className="text-lg font-medium text-white">{label}</span>
        <p className="text-sm text-gray-200">
          <span className="text-base font-medium text-white">
            {payload[0].value}
          </span>{' '}
          commands
        </p>
      </div>
    )
  }

  return null
}

export function LineChart(props: LineChartProps) {
  const formattedData = props.data.map((data) => {
    return {
      id: data.groupId,
      name: data.chat_name,
      count: data._count.command,
    }
  })

  return (
    <ResponsiveContainer width="100%" height={380}>
      <AreaChart width={500} height={400} data={formattedData}>
        <Tooltip content={<CustomTooltip />} />
        <XAxis dataKey="name" className="text-sm" hide />
        <Area
          type="natural"
          dataKey="count"
          stroke="#4f46e5"
          fill="#6366f1"
          strokeWidth={2}
          dot={{
            stroke: '#4f46e5',
            strokeWidth: 2,
            fill: 'white',
            fillOpacity: 0.9,
            r: 4,
            strokeDasharray: '',
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}