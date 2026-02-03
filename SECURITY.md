# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in BudgetYourIncome, please follow responsible disclosure practices:

### How to Report

1. **Do NOT** open a public GitHub issue for security vulnerabilities
2. Email the project maintainers directly with details of the vulnerability
3. Allow reasonable time for the issue to be addressed before public disclosure

### What to Include

When reporting a security issue, please include:

- A description of the vulnerability
- Steps to reproduce the issue
- Potential impact of the vulnerability
- Any suggested fixes (if available)

## Security Best Practices for Contributors

### Environment Variables

- **Never** commit `.env` files containing real credentials
- Always use `.env.example` with placeholder values
- Keep Firebase API keys and other credentials in environment variables
- See `SETUP.md` for proper environment configuration

### Code Security

- Validate all user inputs
- Use parameterized queries for database operations
- Keep dependencies up to date (`npm audit` regularly)
- Follow the principle of least privilege for Firebase security rules

### Dependencies

- Run `npm audit` before submitting pull requests
- Update dependencies with known vulnerabilities promptly
- Review security advisories for critical dependencies

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Security Features

This project implements the following security measures:

- Environment variable-based configuration for sensitive data
- Firebase Authentication for user management
- `.gitignore` configured to prevent credential leaks
- Regular dependency audits

## Additional Resources

- [Firebase Security Rules](https://firebase.google.com/docs/rules)
- [Expo Security Best Practices](https://docs.expo.dev/guides/security/)
- [OWASP Mobile Security](https://owasp.org/www-project-mobile-security/)
