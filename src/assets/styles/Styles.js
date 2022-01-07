import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    logoContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
    
      logo: {
        width: '90%',
        height: 220,
      },
    
      companyName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    
      loginHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
      },
    
      loginHeadingContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
      },
    
      emailInputcontainer: {
        marginTop: 25,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      emailInput: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#CCCC',
        backgroundColor: '#fafafa',
        borderRadius: 3,
        fontSize: 20,
        padding: 10,
        paddingLeft: 15,
      },
    
      passwordInputcontainer: {
        marginTop: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      passwordInput: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 3,
        fontSize: 20,
        padding: 10,
        paddingLeft: 15,
      },
    
      loginButton: {
        width: '90%',
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: 15,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1.41,
        elevation: 2,
      },
    
      loginButtontext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textTransform: 'uppercase',
      },
    
      loginButtoncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      signupButton: {
        width: '90%',
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    
        elevation: 2,
      },
    
      signupButtontext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textTransform: 'uppercase',
      },
    
      signupButtoncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
    
      forgotPasswordcontainer: {
        marginTop: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      forgotPasswordtext: {
        fontSize: 14,
        color: 'blue',
      },
    
      orTextcontainer: {
        marginTop: 30,
      },
    
      orText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#0275dB',
        textTransform: 'capitalize',
      },
      
      backgroundImage: {
        position: 'absolute',
        zIndex: -1,
        opacity: 0.4,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
      },

      adminHeading: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
    
      adminHeadingContainer: {
        width: '100%',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 70,
      },
    
      buttonMainContainer: {
        width: '100%',
        marginTop: 15,
      },
    
      button: {
        width: '60%',
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      },
    
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
    
      buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
      },
    
      dropdownContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 80,
      },
    
      dropDown: {
        borderColor: '#CCC',
        borderRadius: 3,
        alignItems: 'center',
        alignSelf: 'center',
      },

      myContainer: {
        flex: 1,
      },
      
      logoContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      
      logo: {
        width: '60%',
        height: 160,
      },
      
      companyName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
      },

      loginHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
      },
      
      loginHeadingContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
      },
    
      nameContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
    
      fName: {
        borderWidth: 1,
        width: '43%',
        height: 45,
        borderRadius: 3,
        borderColor: '#ccc',
        backgroundColor: '#f7f7f7',
        fontSize: 16,
        paddingLeft: 15,
        marginRight: 9,
      },
    
      lName: {
        borderWidth: 1,
        width: '44%',
        height: 45,
        borderColor: '#ccc',
        backgroundColor: '#f7f7f7',
        borderRadius: 3,
        fontSize: 16,
        paddingLeft: 15,
      },
    
      signUpemailInputcontainer: {
        marginTop: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },

      firstNamecontainer: {
        marginTop: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },

      signUpemailInput: {
        width: '90%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#f7f7f7',
        borderRadius: 3,
        fontSize: 16,
        padding: 10,
        paddingLeft: 15,
      },
      
      signUppasswordInputcontainer: {
        marginTop: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      signUppasswordInput: {
        width: '90%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#f7f7f7',
        borderRadius: 3,
        fontSize: 16,
        padding: 10,
        paddingLeft: 15,
      },

      loginButton: {
        width: '90%',
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1.41,
    
        elevation: 2,
      },
      
      loginButtontext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textTransform: 'uppercase',
      },
      
      loginButtoncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      signupButton: {
        width: '90%',
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      },
      
      signupButtontext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase',
      },
      
      signupButtoncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      
      forgotPasswordcontainer: {
        marginTop: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      forgotPasswordtext: {
        fontSize: 14,
        color: 'blue',
      },
      
      orTextcontainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      orText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey',
        textTransform: 'capitalize',
      },

      inputMaincontainer: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 12,
      },
    
      inputLabelcontainer: {
        marginLeft: 12,
      },
    
      inputLabeltext: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
      },

      checklistMaincontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '96%',
        marginLeft: 8,
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#CCCC',
        borderRadius: 5,
      },
    
      checklistContainer: {
        width: '92%',
        marginBottom: 30,
      },
    
      headingContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
    
      headingText: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Estonia-Regular',
      },
    
      radioButtoncontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      },
    
      tagText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
      },

});

export default styles;
