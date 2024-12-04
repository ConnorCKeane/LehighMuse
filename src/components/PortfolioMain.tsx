import React from 'react';

const PortfolioMain = () => {
    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            backgroundImage: 'url(/background.jpg)', // Update path to desired background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '0',
        }}>
            
            {/* Overlay for opacity effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for better readability
                zIndex: 0
            }}></div>
            
            {/* Profile box */}
            <div style={{
                width: '90%',
                maxWidth: '700px',
                position: 'relative',
                background: '#2B303A',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px',
                boxShadow: '0 15px 25px rgba(0, 0, 0, 0.1)',
                zIndex: 1,
                marginTop: '130px',
                marginBottom: '100px',
            }}>
                {/* Profile Image */}
                <img 
                    src="/profile.jpg" // Update with the path to the profile image
                    alt="Profile"
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginBottom: '20px'
                    }}
                />

                {/* Name */}
                <h1 style={{
                    color: 'white',
                    fontSize: '36px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    lineHeight: '1.2',
                    marginBottom: '10px',
                    textAlign: 'center'
                }}>
                    Your Name
                </h1>

                {/* Brief Bio */}
                <p style={{
                    color: 'white',
                    fontSize: '18px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    lineHeight: '1.5',
                    textAlign: 'center',
                    marginBottom: '30px'
                }}>
                    Brief bio about yourself. Describe your background, interests, and any personal or professional details you'd like visitors to know.
                </p>

                {/* Social Media Links */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    marginBottom: '20px'
                }}>
                    {/* Replace the href values with your actual social links */}
                    <a 
                        href="https://linkedin.com/in/yourprofile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            color: 'white',
                            fontSize: '24px',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0077b5'} // LinkedIn color on hover
                        onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                    >
                        LinkedIn
                    </a>

                    <a 
                        href="https://github.com/yourprofile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            color: 'white',
                            fontSize: '24px',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#333'} // GitHub color on hover
                        onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                    >
                        GitHub
                    </a>

                    <a 
                        href="https://twitter.com/yourprofile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            color: 'white',
                            fontSize: '24px',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#1DA1F2'} // Twitter color on hover
                        onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioMain;