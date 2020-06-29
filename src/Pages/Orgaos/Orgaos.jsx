import React from 'react'
import {Typography} from "@material-ui/core"
import {useGetOrgaosSociais} from "../../Domain/UseCases"
import { Skeleton } from '@material-ui/lab'

 const Orgaos = ()=> {
    const {
        data: orgaos,
        status: orgaosStatus
      } = useGetOrgaosSociais()

      const isLoading = React.useMemo(() => {
        return orgaosStatus === 'loading'  
        }, [orgaosStatus])

    return (
        <>
            <div className="orgaosHeader">
                <Typography className="title" variant="h2">Orgãos Sociais</Typography>
            </div>
            <div className="teamContainer">
                <Typography  variant="h3">Assembleia Geral</Typography>
                <div className="membersContainer">
                    {isLoading && <>
                        <div className="memberCardContainer">
                            <Skeleton width={200} height={200} variant="circle"/>
                            <Skeleton style={{margin: "20px 0 10px 0 "}} width={150} height={30} variant="rect"/>
                            <Skeleton width={50} height={20} variant="rect"/>
                        </div>
                        <div className="memberCardContainer">
                            <Skeleton width={200} height={200} variant="circle"/>
                            <Skeleton style={{margin: "20px 0 10px 0 "}} width={150} height={30} variant="rect"/>
                            <Skeleton width={50} height={20} variant="rect"/>
                        </div>
                        <div className="memberCardContainer">
                            <Skeleton width={200} height={200} variant="circle"/>
                            <Skeleton style={{margin: "20px 0 10px 0 "}} width={150} height={30} variant="rect"/>
                            <Skeleton width={50} height={20} variant="rect"/>
                        </div>
                        <div className="memberCardContainer">
                            <Skeleton width={200} height={200} variant="circle"/>
                            <Skeleton style={{margin: "20px 0 10px 0 "}} width={150} height={30} variant="rect"/>
                            <Skeleton width={50} height={20} variant="rect"/>
                        </div>
                    </>}
                    {!isLoading && <> 
                        {orgaos.assmbleiaGeral.map(member=>{
                            return(
                                <div className="memberCardContainer">
                                    <img src={member.foto} alt=""/>
                                    <Typography variant="subtitle1">{member.nome}</Typography>
                                    <Typography color="primary" variant="caption">{member.funcao}</Typography>
                                </div>
                            )
                        })}
                    </>}
                </div>
                <Typography  variant="h3">Direção</Typography>
                <div className="membersContainer">
                    {isLoading && <>
                        <div className="memberCardContainer">
                            <Skeleton width={200} height={200} variant="circle"/>
                            <Skeleton style={{margin: "20px 0 10px 0 "}} width={150} height={30} variant="rect"/>
                            <Skeleton width={50} height={20} variant="rect"/>
                        </div>
                        <div className="memberCardContainer">
                            <Skeleton width={200} height={200} variant="circle"/>
                            <Skeleton style={{margin: "20px 0 10px 0 "}} width={150} height={30} variant="rect"/>
                            <Skeleton width={50} height={20} variant="rect"/>
                        </div>
                        <div className="memberCardContainer">
                            <Skeleton width={200} height={200} variant="circle"/>
                            <Skeleton style={{margin: "20px 0 10px 0 "}} width={150} height={30} variant="rect"/>
                            <Skeleton width={50} height={20} variant="rect"/>
                        </div>
                        <div className="memberCardContainer">
                            <Skeleton width={200} height={200} variant="circle"/>
                            <Skeleton style={{margin: "20px 0 10px 0 "}} width={150} height={30} variant="rect"/>
                            <Skeleton width={50} height={20} variant="rect"/>
                        </div>
                    </>}
                    {!isLoading && <> 
                        {orgaos.direcao.map(member=>{
                            return(
                                <div className="memberCardContainer">
                                    <img src={member.foto} alt=""/>
                                    <Typography variant="subtitle1">{member.nome}</Typography>
                                    <Typography color="primary" variant="caption">{member.funcao}</Typography>
                                </div>
                            )
                        })}
                    </>}
                </div>
                <Typography  variant="h3">Concelho Fiscal</Typography>
                <div className="membersContainer">
                    {isLoading && <>
                        <div className="memberCardContainer">
                            <Skeleton width={200} height={200} variant="circle"/>
                            <Skeleton style={{margin: "20px 0 10px 0 "}} width={150} height={30} variant="rect"/>
                            <Skeleton width={50} height={20} variant="rect"/>
                        </div>
                        <div className="memberCardContainer">
                            <Skeleton width={200} height={200} variant="circle"/>
                            <Skeleton style={{margin: "20px 0 10px 0 "}} width={150} height={30} variant="rect"/>
                            <Skeleton width={50} height={20} variant="rect"/>
                        </div>
                        <div className="memberCardContainer">
                            <Skeleton width={200} height={200} variant="circle"/>
                            <Skeleton style={{margin: "20px 0 10px 0 "}} width={150} height={30} variant="rect"/>
                            <Skeleton width={50} height={20} variant="rect"/>
                        </div>
                        <div className="memberCardContainer">
                            <Skeleton width={200} height={200} variant="circle"/>
                            <Skeleton style={{margin: "20px 0 10px 0 "}} width={150} height={30} variant="rect"/>
                            <Skeleton width={50} height={20} variant="rect"/>
                        </div>
                    </>}
                    {!isLoading && <> 
                        {orgaos.concelhoFiscal.map(member=>{
                            return(
                                <div className="memberCardContainer">
                                    <img src={member.foto} alt=""/>
                                    <Typography variant="subtitle1">{member.nome}</Typography>
                                    <Typography color="primary" variant="caption">{member.funcao}</Typography>
                                </div>
                            )
                        })}
                    </>}
                </div>
            </div>
        </>
    )
}
export default Orgaos