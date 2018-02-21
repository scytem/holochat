import { connect } from 'react-redux'
import Index from '../components/index'
import {
  register
} from '../actions'

const mapStateToProps = state => {
  return {
    userHash: state.userHash
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (profile) => {
      console.log('REGISTER! ' + profile.username)
      dispatch(register(profile))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)