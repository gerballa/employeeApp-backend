const allEmployees = [
    {
        id: 1,
        name: 'John Doe',
        position: 'Software Engineer',
        department: 'Engineering',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        hire_date: '2022-01-01',
        salary: 80000,
        address: {
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            zip_code: '12345',
            country: 'USA',
        },
        skills: ['JavaScript', 'Node.js', 'React', 'SQL'],
        projects: [
            {
                name: 'Project A',
                description: 'Developing a new feature for the company\'s main product',
                start_date: '2022-02-15',
                end_date: '2022-05-30',
            },
            {
                name: 'Project B',
                description: 'Optimizing database queries for improved performance',
                start_date: '2022-06-01',
                end_date: '2022-08-31',
            },
        ],
        manager: {
            id: 101,
            name: 'Jane Smith',
            position: 'Engineering Manager',
        },
    },
    {
        id: 2,
        name: 'Jane Smith',
        position: 'Product Manager',
        department: 'Product Management',
        email: 'jane.smith@example.com',
        phone: '+1987654321',
        hire_date: '2021-11-15',
        salary: 90000,
        address: {
            street: '456 Oak St',
            city: 'Sometown',
            state: 'NY',
            zip_code: '54321',
            country: 'USA',
        },
        skills: ['Product Management', 'Market Research', 'Project Management'],
        projects: [
            {
                name: 'Product Launch',
                description: 'Launching a new product into the market',
                start_date: '2021-12-01',
                end_date: '2022-03-31',
            },
            {
                name: 'Market Analysis',
                description: 'Conducting analysis of market trends and competitors',
                start_date: '2022-04-01',
                end_date: '2022-06-30',
            },
        ],
        manager: {
            id: 201,
            name: 'David Johnson',
            position: 'Product Director',
        },
    },
    {
        id: 3,
        name: 'Alice Johnson',
        position: 'HR Manager',
        department: 'Human Resources',
        email: 'alice.johnson@example.com',
        phone: '+1122334455',
        hire_date: '2023-03-15',
        salary: 75000,
        address: {
            street: '789 Elm St',
            city: 'Newville',
            state: 'TX',
            zip_code: '67890',
            country: 'USA',
        },
        skills: ['HR Management', 'Recruitment', 'Employee Relations'],
        projects: [
            {
                name: 'Project B',
                description: 'Optimizing database queries for improved performance',
                start_date: '2022-06-01',
                end_date: '2022-08-31',
            },
            {
                name: 'Recruitment Drive',
                description: 'Organizing recruitment drive for new hires',
                start_date: '2023-04-01',
                end_date: '2023-05-31',
            },
            {
                name: 'Employee Training',
                description: 'Planning and implementing employee training programs',
                start_date: '2023-06-01',
                end_date: '2023-08-31',
            },
        ],
        manager: {
            id: 301,
            name: 'Michael Brown',
            position: 'HR Director',
        },
    },
    {
        id: 4,
        name: 'David Brown',
        position: 'Sales Manager',
        department: 'Sales',
        email: 'david.brown@example.com',
        phone: '+1555666777',
        hire_date: '2023-06-10',
        salary: 85000,
        address: {
            street: '456 Pine St',
            city: 'Cityville',
            state: 'CA',
            zip_code: '54321',
            country: 'USA',
        },
        skills: ['Sales Management', 'Customer Relationship Management', 'Negotiation'],
        projects: [
            {
                name: 'Market Analysis',
                description: 'Conducting analysis of market trends and competitors',
                start_date: '2022-04-01',
                end_date: '2022-06-30',
            },
            {
                name: 'Sales Campaign Launch',
                description: 'Launching a new sales campaign to boost revenue',
                start_date: '2023-07-01',
                end_date: '2023-09-30',
            },
            {
                name: 'Client Acquisition',
                description: 'Acquiring new clients and expanding customer base',
                start_date: '2023-10-01',
                end_date: '2023-12-31',
            },
            {
                name: 'Employee Training',
                description: 'Planning and implementing employee training programs',
                start_date: '2023-06-01',
                end_date: '2023-08-31',
            },
        ],
        manager: {
            id: 401,
            name: 'Emily White',
            position: 'Sales Director',
        },
    },
    {
        id: 5,
        name: 'Emma Johnson',
        position: 'Marketing Coordinator',
        department: 'Marketing',
        email: 'emma.johnson@example.com',
        phone: '+1555777888',
        hire_date: '2023-03-15',
        salary: 65000,
        address: {
            street: '789 Oak Ave',
            city: 'Townsville',
            state: 'NY',
            zip_code: '12345',
            country: 'USA',
        },
        skills: ['Digital Marketing', 'Content Creation', 'Social Media Management'],
        projects: [
            {
                name: 'Product Launch Campaign',
                description: 'Planning and executing marketing strategies for new product launches',
                start_date: '2023-06-01',
                end_date: '2023-08-31',
            },
            {
                name: 'SEO Optimization',
                description: 'Improving website ranking through search engine optimization techniques',
                start_date: '2023-09-01',
                end_date: '2023-11-30',
            },
            {
                name: 'Email Marketing Campaign',
                description: 'Creating and implementing targeted email campaigns to engage customers',
                start_date: '2023-12-01',
                end_date: '2024-02-29',
            },
            {
                name: 'Market Research',
                description: 'Conducting research to analyze market trends and consumer behavior',
                start_date: '2024-03-01',
                end_date: '2024-05-31',
            },
        ],
        manager: {
            id: 402,
            name: 'Daniel Smith',
            position: 'Marketing Director',
        },
    },
    {
        id: 6,
        name: 'Alexandra Lee',
        position: 'Software Developer',
        department: 'Engineering',
        email: 'alexandra.lee@example.com',
        phone: '+1555888999',
        hire_date: '2023-05-20',
        salary: 90000,
        address: {
            street: '101 Elm Street',
            city: 'Techville',
            state: 'CA',
            zip_code: '98765',
            country: 'USA',
        },
        skills: ['JavaScript', 'React.js', 'Node.js', 'SQL'],
        projects: [
            {
                name: 'Web Application Development',
                description: 'Building a scalable web application for client management',
                start_date: '2023-07-01',
                end_date: '2023-10-31',
            },
            {
                name: 'Database Optimization',
                description: 'Optimizing database queries for improved performance',
                start_date: '2023-11-01',
                end_date: '2024-01-31',
            },
            {
                name: 'API Integration',
                description: 'Integrating third-party APIs for enhanced functionality',
                start_date: '2024-02-01',
                end_date: '2024-05-31',
            },
        ],
        manager: {
            id: 403,
            name: 'Michael Johnson',
            position: 'Engineering Manager',
        },
    },
    {
        id: 7,
        name: 'Sophia Martinez',
        position: 'Financial Analyst',
        department: 'Finance',
        email: 'sophia.martinez@example.com',
        phone: '+1555999000',
        hire_date: '2023-02-10',
        salary: 75000,
        address: {
            street: '222 Maple Avenue',
            city: 'Financetown',
            state: 'NY',
            zip_code: '24680',
            country: 'USA',
        },
        skills: ['Financial Modeling', 'Data Analysis', 'Budgeting'],
        projects: [
            {
                name: 'Quarterly Financial Report',
                description: 'Preparing and analyzing financial reports for stakeholders',
                start_date: '2023-04-01',
                end_date: '2023-06-30',
            },
            {
                name: 'Cost Reduction Initiative',
                description: 'Identifying areas for cost reduction and implementing strategies',
                start_date: '2023-07-01',
                end_date: '2023-09-30',
            },
            {
                name: 'Investment Analysis',
                description: 'Analyzing potential investment opportunities for the company',
                start_date: '2023-10-01',
                end_date: '2023-12-31',
            },
        ],
        manager: {
            id: 404,
            name: 'Olivia Brown',
            position: 'Finance Manager',
        },
    },
    {
        id: 8,
        name: 'Christopher Taylor',
        position: 'Human Resources Specialist',
        department: 'Human Resources',
        email: 'christopher.taylor@example.com',
        phone: '+1555666777',
        hire_date: '2023-08-15',
        salary: 70000,
        address: {
            street: '789 Oak St',
            city: 'HRville',
            state: 'TX',
            zip_code: '34567',
            country: 'USA',
        },
        skills: ['Recruitment', 'Employee Relations', 'Training and Development'],
        projects: [
            {
                name: 'Recruitment Drive',
                description: 'Planning and executing recruitment campaigns to attract top talent',
                start_date: '2023-09-01',
                end_date: '2023-11-30',
            },
            {
                name: 'Employee Onboarding',
                description: 'Designing and implementing onboarding programs for new hires',
                start_date: '2023-12-01',
                end_date: '2024-02-29',
            },
            {
                name: 'Performance Management',
                description: 'Developing strategies for evaluating and improving employee performance',
                start_date: '2024-03-01',
                end_date: '2024-05-31',
            },
        ],
        manager: {
            id: 405,
            name: 'Jessica Adams',
            position: 'HR Manager',
        },
    },
    {
        id: 9,
        name: 'Matthew Clark',
        position: 'Graphic Designer',
        department: 'Creative',
        email: 'matthew.clark@example.com',
        phone: '+1555222333',
        hire_date: '2023-07-20',
        salary: 60000,
        address: {
            street: '456 Main St',
            city: 'Designville',
            state: 'CA',
            zip_code: '54321',
            country: 'USA',
        },
        skills: ['Adobe Creative Suite', 'Typography', 'UI/UX Design'],
        projects: [
            {
                name: 'Brand Identity Redesign',
                description: 'Creating new branding materials to refresh the company’s identity',
                start_date: '2023-08-01',
                end_date: '2023-10-31',
            },
            {
                name: 'Website Redesign',
                description: 'Redesigning the company website for improved user experience',
                start_date: '2023-11-01',
                end_date: '2024-01-31',
            },
            {
                name: 'Marketing Collateral Design',
                description: 'Developing marketing materials for various campaigns and promotions',
                start_date: '2024-02-01',
                end_date: '2024-05-31',
            },
        ],
        manager: {
            id: 406,
            name: 'Emily Miller',
            position: 'Creative Director',
        },
    },
    {
        id: 10,
        name: 'Jennifer Rodriguez',
        position: 'Customer Service Representative',
        department: 'Customer Service',
        email: 'jennifer.rodriguez@example.com',
        phone: '+1555444555',
        hire_date: '2023-09-25',
        salary: 50000,
        address: {
            street: '789 Elm St',
            city: 'Serviceville',
            state: 'FL',
            zip_code: '12345',
            country: 'USA',
        },
        skills: ['Communication', 'Problem Solving', 'Customer Relationship Management'],
        projects: [
            {
                name: 'Customer Satisfaction Surveys',
                description: 'Conducting surveys to gather feedback and improve service quality',
                start_date: '2023-10-01',
                end_date: '2023-12-31',
            },
            {
                name: 'Handling Customer Complaints',
                description: 'Resolving customer complaints and ensuring positive outcomes',
                start_date: '2024-01-01',
                end_date: '2024-03-31',
            },
            {
                name: 'Product Knowledge Training',
                description: 'Participating in training sessions to enhance product knowledge',
                start_date: '2024-04-01',
                end_date: '2024-06-30',
            },
        ],
        manager: {
            id: 407,
            name: 'David Wilson',
            position: 'Customer Service Manager',
        },
    },
    {
        id: 11,
        name: 'Jessica Roberts',
        position: 'Project Manager',
        department: 'Project Management',
        email: 'jessica.roberts@example.com',
        phone: '+1555666888',
        hire_date: '2023-04-10',
        salary: 80000,
        address: {
            street: '123 Oak Ave',
            city: 'Projectville',
            state: 'TX',
            zip_code: '98765',
            country: 'USA',
        },
        skills: ['Project Planning', 'Team Leadership', 'Risk Management'],
        projects: [
            {
                name: 'Software Development Project',
                description: 'Managing the development of a new software application',
                start_date: '2023-05-01',
                end_date: '2023-08-31',
            },
            {
                name: 'Infrastructure Upgrade Project',
                description: 'Overseeing the upgrade of company infrastructure for scalability',
                start_date: '2023-09-01',
                end_date: '2023-12-31',
            },
            {
                name: 'Marketing Campaign Launch',
                description: 'Coordinating the launch of a marketing campaign to boost sales',
                start_date: '2024-01-01',
                end_date: '2024-04-30',
            },
        ],
        manager: {
            id: 408,
            name: 'Andrew Thompson',
            position: 'Project Management Director',
        },
    },
    {
        id: 12,
        name: 'Emily Johnson',
        position: 'Research Scientist',
        department: 'Research and Development',
        email: 'emily.johnson@example.com',
        phone: '+1555333444',
        hire_date: '2023-11-10',
        salary: 95000,
        address: {
            street: '321 Maple St',
            city: 'Researchville',
            state: 'MA',
            zip_code: '54321',
            country: 'USA',
        },
        skills: ['Experimental Design', 'Data Analysis', 'Publication Writing'],
        projects: [
            {
                name: 'Drug Discovery Project',
                description: 'Leading a team to discover new pharmaceutical compounds',
                start_date: '2023-12-01',
                end_date: '2024-03-31',
            },
            {
                name: 'Clinical Trial Design',
                description: 'Designing protocols for clinical trials to evaluate drug efficacy',
                start_date: '2024-04-01',
                end_date: '2024-07-31',
            },
            {
                name: 'Research Paper Publication',
                description: 'Writing and publishing research papers in scientific journals',
                start_date: '2024-08-01',
                end_date: '2024-11-30',
            },
        ],
        manager: {
            id: 409,
            name: 'Dr. Michael Smith',
            position: 'Research Director',
        },
    },
    {
        id: 13,
        name: 'Daniel Brown',
        position: 'Legal Counsel',
        department: 'Legal',
        email: 'daniel.brown@example.com',
        phone: '+1555777999',
        hire_date: '2023-10-15',
        salary: 110000,
        address: {
            street: '456 Cedar St',
            city: 'Lawtown',
            state: 'DC',
            zip_code: '98765',
            country: 'USA',
        },
        skills: ['Contract Law', 'Litigation Management', 'Legal Research'],
        projects: [
            {
                name: 'Contract Negotiations',
                description: 'Negotiating and drafting contracts with clients and partners',
                start_date: '2023-11-01',
                end_date: '2024-02-29',
            },
            {
                name: 'Legal Compliance Review',
                description: 'Ensuring company operations comply with relevant laws and regulations',
                start_date: '2024-03-01',
                end_date: '2024-06-30',
            },
            {
                name: 'Litigation Support',
                description: 'Providing legal support in litigation matters involving the company',
                start_date: '2024-07-01',
                end_date: '2024-10-31',
            },
        ],
        manager: {
            id: 410,
            name: 'Sarah Adams',
            position: 'Legal Director',
        },
    },
    {
        id: 14,
        name: 'Mark Wilson',
        position: 'Operations Manager',
        department: 'Operations',
        email: 'mark.wilson@example.com',
        phone: '+1555888000',
        hire_date: '2023-06-20',
        salary: 85000,
        address: {
            street: '789 Maple St',
            city: 'Operationstown',
            state: 'IL',
            zip_code: '12345',
            country: 'USA',
        },
        skills: ['Process Improvement', 'Supply Chain Management', 'Team Leadership'],
        projects: [
            {
                name: 'Warehouse Optimization',
                description: 'Streamlining warehouse operations for efficiency and cost savings',
                start_date: '2023-07-01',
                end_date: '2023-09-30',
            },
            {
                name: 'Inventory Management System Implementation',
                description: 'Implementing a new inventory management system for better tracking',
                start_date: '2023-10-01',
                end_date: '2023-12-31',
            },
            {
                name: 'Quality Control Improvement',
                description: 'Improving quality control processes to ensure product quality',
                start_date: '2024-01-01',
                end_date: '2024-03-31',
            },
        ],
        manager: {
            id: 411,
            name: 'John Davis',
            position: 'Operations Director',
        },
    },
    {
        id: 15,
        name: 'Ryan Garcia',
        position: 'Data Analyst',
        department: 'Data Analytics',
        email: 'ryan.garcia@example.com',
        phone: '+1555333222',
        hire_date: '2023-07-15',
        salary: 75000,
        address: {
            street: '789 Elm Street',
            city: 'Analyticstown',
            state: 'TX',
            zip_code: '12345',
            country: 'USA',
        },
        skills: ['Data Visualization', 'Statistical Analysis', 'Database Management'],
        projects: [
            {
                name: 'Sales Forecasting',
                description: 'Analyzing historical data to predict future sales trends',
                start_date: '2023-08-01',
                end_date: '2023-10-31',
            },
            {
                name: 'Customer Segmentation',
                description: 'Segmenting customers based on their behavior and demographics',
                start_date: '2023-11-01',
                end_date: '2024-01-31',
            },
            {
                name: 'Performance Metrics Dashboard',
                description: 'Developing dashboards to track key performance metrics for the company',
                start_date: '2024-02-01',
                end_date: '2024-04-30',
            },
        ],
        manager: {
            id: 413,
            name: 'Laura Martinez',
            position: 'Analytics Manager',
        },
    },
    {
        id: 16,
        name: 'Michael Thompson',
        position: 'Teacher',
        department: 'Education',
        email: 'michael.thompson@example.com',
        phone: '+1555777666',
        hire_date: '2023-09-01',
        salary: 60000,
        address: {
            street: '456 Maple Avenue',
            city: 'Eduville',
            state: 'CA',
            zip_code: '98765',
            country: 'USA',
        },
        skills: ['Curriculum Development', 'Classroom Management', 'Student Assessment'],
        projects: [
            {
                name: 'Curriculum Enhancement',
                description: 'Developing and implementing curriculum enhancements to improve student learning outcomes',
                start_date: '2023-09-15',
                end_date: '2023-12-31',
            },
            {
                name: 'Student Performance Analysis',
                description: 'Analyzing student performance data to identify areas for improvement',
                start_date: '2024-01-01',
                end_date: '2024-03-31',
            },
            {
                name: 'Parent-Teacher Collaboration',
                description: 'Promoting collaboration between parents and teachers to support student success',
                start_date: '2024-04-01',
                end_date: '2024-06-30',
            },
        ],
        manager: {
            id: 414,
            name: 'Dr. Emily White',
            position: 'Education Director',
        },
    },
    {
        id: 17,
        name: 'Olivia Adams',
        position: 'Social Media Manager',
        department: 'Marketing',
        email: 'olivia.adams@example.com',
        phone: '+1555444888',
        hire_date: '2023-08-10',
        salary: 70000,
        address: {
            street: '789 Pine St',
            city: 'Socialville',
            state: 'NY',
            zip_code: '12345',
            country: 'USA',
        },
        skills: ['Social Media Marketing', 'Content Creation', 'Audience Engagement'],
        projects: [
            {
                name: 'Social Media Strategy Development',
                description: 'Creating comprehensive social media strategies to increase brand visibility',
                start_date: '2023-09-01',
                end_date: '2023-11-30',
            },
            {
                name: 'Content Calendar Management',
                description: 'Developing and managing content calendars for consistent posting schedules',
                start_date: '2023-12-01',
                end_date: '2024-02-29',
            },
            {
                name: 'Influencer Collaboration',
                description: 'Collaborating with influencers to promote products and increase reach',
                start_date: '2024-03-01',
                end_date: '2024-05-31',
            },
        ],
        manager: {
            id: 415,
            name: 'Daniel Brown',
            position: 'Marketing Director',
        },
    },
    {
        id: 18,
        name: 'Sophie Miller',
        position: 'Cybersecurity Analyst',
        department: 'Information Technology',
        email: 'sophie.miller@example.com',
        phone: '+1555666111',
        hire_date: '2023-10-20',
        salary: 80000,
        address: {
            street: '456 Elm St',
            city: 'Techtown',
            state: 'CA',
            zip_code: '98765',
            country: 'USA',
        },
        skills: ['Network Security', 'Incident Response', 'Vulnerability Assessment'],
        projects: [
            {
                name: 'Security Risk Assessment',
                description: 'Conducting risk assessments to identify and mitigate cybersecurity threats',
                start_date: '2023-11-01',
                end_date: '2024-01-31',
            },
            {
                name: 'Security Incident Investigation',
                description: 'Investigating security incidents and implementing remediation measures',
                start_date: '2024-02-01',
                end_date: '2024-04-30',
            },
            {
                name: 'Security Awareness Training',
                description: 'Developing and delivering cybersecurity awareness training for employees',
                start_date: '2024-05-01',
                end_date: '2024-07-31',
            },
        ],
        manager: {
            id: 416,
            name: 'Emily White',
            position: 'IT Security Manager',
        },
    },
    {
        id: 19,
        name: 'Ethan Carter',
        position: 'Graphic Design Intern',
        department: 'Creative',
        email: 'ethan.carter@example.com',
        phone: '+1555888333',
        hire_date: '2024-01-15',
        salary: 30000,
        address: {
            street: '123 Cedar St',
            city: 'Designville',
            state: 'CA',
            zip_code: '54321',
            country: 'USA',
        },
        skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Typography'],
        projects: [
            {
                name: 'Brand Identity Design',
                description: 'Assisting in the design of brand identity materials for clients',
                start_date: '2024-02-01',
                end_date: '2024-04-30',
            },
            {
                name: 'Social Media Graphics Creation',
                description: 'Creating graphics for social media posts and campaigns',
                start_date: '2024-05-01',
                end_date: '2024-07-31',
            },
            {
                name: 'Client Presentation Preparation',
                description: 'Assisting in the preparation of design presentations for clients',
                start_date: '2024-08-01',
                end_date: '2024-10-31',
            },
        ],
        manager: {
            id: 417,
            name: 'Jessica Roberts',
            position: 'Creative Director',
        },
    },
    {
        id: 20,
        name: 'Nathan Anderson',
        position: 'Financial Advisor',
        department: 'Finance',
        email: 'nathan.anderson@example.com',
        phone: '+1555777222',
        hire_date: '2023-12-10',
        salary: 90000,
        address: {
            street: '456 Oak St',
            city: 'Financetown',
            state: 'NY',
            zip_code: '98765',
            country: 'USA',
        },
        skills: ['Investment Planning', 'Retirement Planning', 'Risk Management'],
        projects: [
            {
                name: 'Investment Portfolio Management',
                description: 'Providing personalized investment advice and managing client portfolios',
                start_date: '2024-01-01',
                end_date: '2024-03-31',
            },
            {
                name: 'Retirement Planning Workshops',
                description: 'Conducting workshops to educate clients on retirement planning strategies',
                start_date: '2024-04-01',
                end_date: '2024-06-30',
            },
            {
                name: 'Financial Risk Assessment',
                description: 'Assessing and mitigating financial risks for clients',
                start_date: '2024-07-01',
                end_date: '2024-09-30',
            },
        ],
        manager: {
            id: 418,
            name: 'Sarah Martinez',
            position: 'Finance Manager',
        },
    }



















];

module.exports = {
    allEmployees
}
