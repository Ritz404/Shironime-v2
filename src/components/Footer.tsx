import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-light py-4">
            <div className="container-fluid px-5">
                <div className="row align-items-center">
                    <div className="col-6 text-start">
                        <p className="mb-0">MY SOCIAL.</p>
                    </div>
                    <div className="col-6 text-end">
                        <a
                            href="https://github.com/Ritz404"
                            className="text-light me-3"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-github"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/ritz.404"
                            className="text-light me-3"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=100092608782853"
                            className="text-light"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
