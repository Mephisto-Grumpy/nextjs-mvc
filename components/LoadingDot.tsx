const LoadingDot = ({ color = '#000' }: { color?: string }) => {
  return (
    <span className="flex space-x-1">
      <span
        className="w-2.5 h-2.5 rounded-full animate-bounce"
        style={{ backgroundColor: color }}
      />
      <span
        className="w-2.5 h-2.5 rounded-full animate-bounce delay-75"
        style={{ backgroundColor: color }}
      />
      <span
        className="w-2.5 h-2.5 rounded-full animate-bounce delay-150"
        style={{ backgroundColor: color }}
      />
    </span>
  )
}

export default LoadingDot
