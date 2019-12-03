import React from 'react';

export default class EditLLProfile extends React.Component{
    state = {
      username: "",
      email: "",
      name: "",
      bank_account: "",
      password_digest: "",
      company: "",
      logo: ""
    }
    componentDidMount(){
        this.setState({
            username: this.props.landlordData.username,
            email: this.props.landlordData.email,
            name: this.props.landlordData.name,
            bank_account: this.props.landlordData.bank_account,
            password_digest: this.props.landlordData.password_digest,
            company: this.props.landlordData.company,
            logo: this.props.landlordData.logo
        })
    }
    render(){
        return(<form>

        </form>)
    }
}