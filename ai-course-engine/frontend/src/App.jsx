import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Milestones from './components/Milestones'
import Progress   from './components/Progress'
import TechStack  from './components/TechStack'
import Impact     from './components/Impact'
import WeekReport from './components/WeekReport'
import Footer     from './components/Footer'
import { useApi } from './hooks/useApi'
import { fetchMilestones, fetchTasks, fetchStats } from './api'

export default function App() {
  const { data: stats,      loading: sl, error: se } = useApi(fetchStats)
  const { data: milestones, loading: ml, error: me } = useApi(fetchMilestones)
  const { data: tasks,      loading: tl, error: te } = useApi(fetchTasks)

  return (
    <>
      <Navbar />
      <main>
        <Hero       stats={stats} />
        <Milestones milestones={milestones} loading={ml} error={me} />
        <Progress   tasks={tasks}           loading={tl} error={te} />
        <WeekReport />
        <TechStack  />
        <Impact     />
      </main>
      <Footer />
    </>
  )
}
