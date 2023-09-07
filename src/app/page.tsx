"use client"
import CreateCarForm from '@/components/screens/home/createCarForm/CreateCarForm'
import Catalog from '@/components/ui/Catalog'
import { CarService } from '@/services/car.service'
import { useQuery } from '@tanstack/react-query'
import styles from './page.module.scss'

export default function Home() {
  const { data, isLoading } = useQuery(['cars'], () => CarService.getAll())

  return (
      <main className={styles.main}>
          <div>
          {isLoading ? (
            <div>Loading...</div>
            ) : (
              <>
                <span>
                  <h1>Car catalog</h1>
                </span>  
                <div className={styles.form}><CreateCarForm /></div>
                <Catalog data={data} />
              </>
            )}
          </div>            
      </main> 
  )
}
