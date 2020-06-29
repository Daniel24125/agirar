import React from 'react'
import {Typography, Paper,TextField, Select, MenuItem,FormControl, InputLabel,FormHelperText,Button} from "@material-ui/core"
import {useSubmitAssociate} from "../../Domain/UseCases"
import Loading from "../../Components/Loading"
import ErrorMessage from "../../Components/ErrorMessage"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Link } from 'react-router-dom'

 const JoinUs = ()=> {

    const [formData, setFormData] = React.useState({
        sendData:{
            codPostal: "",
            contribuicao: "",
            dataNascimento: "",
            email: "",
            freqPagamento: "Trimestral",
            localidade: "",
            modoPagamento: "Transferência bancária",
            morada: "",
            nib: "",
            nif: "",
            nome: "",
            telefone: ""
        }, 
        error:{
            codPostal:false,
            contribuicao: false,
            dataNascimento: false,
            email: false,
            localidade: false,
            morada: false,
            nib: false,
            nif:false,
            nome: false,
            telefone: false
        },
        validated: false
    })
    const handleSubmit = e=>{
        e.preventDefault()
    }

    const checkContribuicao = ()=>{
        let error = false
        if(formData.sendData.freqPagamento === "Trimestral" && formData.sendData.contribuicao < 6){
            setFormData({
                ...formData, 
                error:{
                    ...formData.error, 
                    contribuicao: true
                }
            })
            error = true
        }else if(formData.sendData.freqPagamento === "Semestral" && formData.sendData.contribuicao< 12){
            setFormData({
                ...formData, 
                error:{
                    ...formData.error, 
                    contribuicao: true
                }
            })
            error = true

        }else if(formData.sendData.freqPagamento === "Anual" && formData.sendData.contribuicao< 24){
            setFormData({
                ...formData, 
                error:{
                    ...formData.error, 
                    contribuicao: true
                }
            })
            error = true
        } else {
            setFormData({
                ...formData, 
                error:{
                    ...formData.error, 
                    contribuicao: false
                }
            })
        }
        return error
    }

    const handleTextChange = e =>{
        let tempData = formData.sendData
        let error = formData.error
        tempData[e.target.id] = e.target.value
        error[e.target.id] = false
        setFormData({
            ...formData,
            sendData: tempData, 
            error
        })
    }

    const handleSelectChange = e =>{
        let tempData = formData.sendData
        tempData[e.target.name] = e.target.value
        setFormData({
            ...formData, 
            sendData: tempData
        })
    }

    const submitData = ()=>{
        let temp_error = formData.error
        let hasError = false
        Object.keys(formData.sendData).map(id=>{
            if(formData.sendData[id] === "" && id !== "nib") {
                temp_error[id] = true; 
                hasError = true
            }
            setFormData({
                ...formData, error: temp_error
            })
        })
        if(formData.sendData.modoPagamento === "Débito Direto" && formData.sendData.nib === "" ){
            hasError = true
            setFormData({
                ...formData, 
                error:{
                    ...formData.error,
                    nib: true
                }
            })
        }
        if(checkContribuicao()) hasError = true


        if(!hasError) setFormData({...formData, validated: true})
    }

    if(formData.validated) return <FormValidated data={formData.sendData}/>  

    return (
        <div className="joinUsContainer">
            <Paper className="formContainer" elevation={1}>
            <Typography variant="h6" >FORMULÁRIO DE ASSOCIADO</Typography>
                <form  onSubmit={handleSubmit} >
                    <TextField 
                        fullWidth={true}
                        id="nome" 
                        label="Nome Completo" 
                        onChange={handleTextChange}
                        error={formData.error.nome}
                        />

                     <TextField 
                        fullWidth={true}
                        id="email" 
                        label="Email" 
                        onChange={handleTextChange}
                        error={formData.error.email}
                        />

                    <TextField 
                        fullWidth={true}
                        id="telefone" 
                        type="number"
                        label="Número de telefone" 
                        onChange={handleTextChange}
                        error={formData.error.telefone}
                        />

                    <TextField 
                        fullWidth={true}
                        id="dataNascimento" 
                        type="date"
                        label="Data de nascimento" 
                        onChange={handleTextChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        error={formData.error.dataNascimento}
                        />

                     <TextField 
                        fullWidth={true}
                        id="morada" 
                        label="Morada" 
                        onChange={handleTextChange}
                        error={formData.error.morada}
                        />

                     <TextField 
                        fullWidth={true}
                        id="codPostal" 
                        label="Código postal" 
                        onChange={handleTextChange}
                        error={formData.error.codPostal}
                        />
                    
                    <TextField 
                        fullWidth={true}
                        id="localidade" 
                        label="Localidade" 
                        onChange={handleTextChange}
                        error={formData.error.localidade}
                        />
                    
                    <TextField 
                        fullWidth={true}
                        id="nif" 
                        label="NIF" 
                        type="number"
                        onChange={handleTextChange}
                        error={formData.error.nif}
                        />
                    
                    <TextField 
                        fullWidth={true}
                        id="contribuicao" 
                        label="Contribuição" 
                        type="number"
                        inputProps={{ min: "6"}}
                        onChange={handleTextChange}
                        helperText={`O valor da sua contribuição de ser no mínimo ${
                            formData.sendData.freqPagamento === "Trimestral"? "6€ por trimestre": 
                                formData.sendData.freqPagamento === "Semestral"? "12€ por semestre": "24€ por ano"     
                        }`}
                        error={formData.error.contribuicao}
                        />
                    <FormControl  fullWidth={true} >
                        <InputLabel id="freqLabel">Frequência de pagamento</InputLabel>    
                        <Select
                            labelId="freqLabel"
                            id="freqPagamento"
                            value={formData.sendData.freqPagamento}
                            onChange={handleSelectChange}
                            name="freqPagamento"        
                            >
                            <MenuItem value= "Trimestral">Trimestral</MenuItem>
                            <MenuItem value= "Semestral">Semestral</MenuItem>
                            <MenuItem value= "Anual">Anual</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl  fullWidth={true} >
                        <InputLabel  id="modoLabel" >Modo de pagamento</InputLabel>    
                        <Select
                            labelId="modoLabel"
                            id="freqPagamento"
                            value={formData.sendData.modoPagamento}
                            onChange={handleSelectChange}
                            name="modoPagamento"
                            >
                            <MenuItem value= "Transferência bancária">Transferência bancária</MenuItem>
                            <MenuItem value= "Débito Direto">Débito Direto</MenuItem>
                        </Select>
                       {formData.sendData.modoPagamento=== "Transferência bancária" &&  <FormHelperText color="primary" >
                            Todas as transferências devem ser realizadas para o NIB: 003600519910035196781
                        </FormHelperText>}
                      
                    {formData.sendData.modoPagamento=== "Débito Direto" && <TextField 
                        fullWidth={true}
                        id="nib" 
                        label="NIB" 
                        onChange={handleTextChange}
                        helperText="Por favor insira o seu NIB para podermos realizar o débito direto."
                        error={formData.error.nib}
                        />}
                    </FormControl>
                    <Button onClick={submitData} variant="contained" color="primary">submeter</Button>
                </form>
            </Paper>
        </div>
    )
}

const FormValidated = data =>{
    const {
        data: response,
        status: submitStatus
    } =  useSubmitAssociate(data)


    const isLoading = React.useMemo(() => {
        return submitStatus === 'loading'  
    }, [submitStatus])
    
    if (isLoading) return <Loading />

    if(response.error) return <ErrorMessage title="Erro" msg="Ocurreu um erro na submissão dos seus dados. Por favor tente mais tarde" />
    return (
        <div className="successContainer" >
            {/* <Typography variant="h1"><EmojiEmotionsIcon/></Typography> */}
            <InsertEmoticonIcon/>
            <Typography variant="h3">MUITO OBRIGADO!</Typography>
            <Typography variant="subtitle1">O seu contributo fará toda a diferença</Typography>
            <Button variant="contained" color="primary">
                <Link to="/home">Página inicial</Link> 
            </Button>
        </div>
    )
}
export default JoinUs