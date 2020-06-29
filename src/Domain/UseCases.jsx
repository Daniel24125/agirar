import { useQuery, queryCache} from 'react-query'
import { Container } from 'typedi'
import AgirarRepository from "../Services/AgirarRepository"

export const useGetCards = ()=>{
    const agirar = Container.get(AgirarRepository)
    return useQuery({
        queryKey: ['main_cards'],
        queryFn: async () => {
            const items = await agirar.getMainCards()
            return (items)
        },
        config: { 
          refetchOnWindowFocus: false,
          refetchInterval: false,
          refetchIntervalInBackground: false,
          onSuccess: (res => {
            res.forEach((value, id) => {
                queryCache.setQueryData(['mainCards', id], value)
              })
          }),
        }
      })
}

export const useGetSliderInfo = ()=>{
    const agirar = Container.get(AgirarRepository)
    return useQuery({
        queryKey: ['slider_cards'],
        queryFn: async () => {
            const items = await agirar.getSliderCards()
            return (items)
        },
        config: { 
          refetchOnWindowFocus: false,
          refetchInterval: false,
          refetchIntervalInBackground: false,
          onSuccess: (res => {
            res.forEach((value, id) => {
                queryCache.setQueryData(['sliderCards', id], value)
              })
          }),
        }
      })
}

export const useGetHistory = ()=>{
    const agirar = Container.get(AgirarRepository)
    return useQuery({
        queryKey: ['history_cards'],
        queryFn: async () => {
            const items = await agirar.getHistory()
            return (items)
        },
        config: { 
          refetchOnWindowFocus: false,
          refetchInterval: false,
          refetchIntervalInBackground: false,
          onSuccess: (res => {
            res.forEach((value, id) => {
                queryCache.setQueryData(['historyCards', id], value)
              })
          }),
        }
      })
}

export const useGetAteliers=()=>{
    const agirar = Container.get(AgirarRepository)
    return useQuery({
        queryKey: ['ateliers_cards'],
        queryFn: async () => {
            const items = await agirar.getAteliers()
            return (items)
        },
        config: { 
          refetchOnWindowFocus: false,
          refetchInterval: false,
          refetchIntervalInBackground: false,
          onSuccess: (res => {
            res.forEach((value, id) => {
                queryCache.setQueryData(['ateliersCards', id], value)
              })
          }),
        }
      })
}

export const useSubmitAssociate = data => {
    const agirar = Container.get(AgirarRepository)
    return useQuery({
        queryKey: ['ateliers_cards'],
        queryFn: async () => {
            const response = await agirar.submitAssociateData(data)
            console.log(response)
            return (response)
        },
        config: { 
          refetchOnWindowFocus: false,
          refetchInterval: false,
          refetchIntervalInBackground: false,
        }
      })
}