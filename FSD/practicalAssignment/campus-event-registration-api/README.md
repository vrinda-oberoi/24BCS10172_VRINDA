# Campus Event Registration REST API

**Student Name:** Vrinda

**UID / Roll Number:** 24BCS10172

**Course:** Full Stack Development (FSD) Practical Assignment

---

## 1. Problem Statement

A robust backend REST API built using **Node.js, Express.js, MongoDB Atlas, and Mongoose** to register and manage attendees for technical workshops and competitive events organized by a college.

The API supports standard CRUD operations, event-based filtering, college email and roll number validation, discount code calculations, duplicate registration prevention, and event-specific business rules. It also provides structured error handling for invalid inputs and registration IDs.

## 2. Resource Schema & Field Validations

The API manages event registrations using a Mongoose model stored in the `registrations` collection.

| Field Name       | Type   | Rules & Validations                                                                        |
| ---------------- | ------ | ------------------------------------------------------------------------------------------ |
| studentName      | String | Required; trimmed; minimum 3 and maximum 50 characters.                                    |
| collegeEmail     | String | Required; valid college email format; duplicate emails are rejected.                       |
| rollNumber       | String | Required; validated according to the configured roll number rules.                         |
| eventType        | String | Required; identifies the selected technical event.                                         |
| teamSize         | Number | Required; AI Workshop registrations must have a team size of 1.                            |
| ticketPrice      | Number | Required; must be non-negative.                                                            |
| discountCode     | String | Optional; supports `CAMPUS50` and `EARLYBIRD`.                                             |
| finalAmount      | Number | Calculated according to the applicable discount rule.                                      |
| status           | String | Registration status, such as `PENDING` or `CONFIRMED`, depending on the configured schema. |
| registrationDate | Date   | Registration creation date, according to the configured schema.                            |

**Note:** Exact enum values, length restrictions, default values, and validation patterns depend on the implementation in the Mongoose schema.

## 3. Business Logic & Challenges Solved

### Challenge A: Custom Discount Code Calculation

The API supports two discount codes:

- **CAMPUS50:** Applies a 50% discount to the original ticket price.

  `finalAmount = ticketPrice * 0.5`

- **EARLYBIRD:** Deducts a flat amount of 100 from the ticket price.

  `finalAmount = Math.max(0, ticketPrice - 100)`

- **No discount code:** The final amount remains equal to the original ticket price.

- **Invalid discount code:** The request is rejected with `400 Bad Request`.

The final payable amount cannot be negative.

### Challenge B: Event-Specific Team Constraint

Registrations for the `AI_WORKSHOP` event must have a team size of exactly 1.

- Valid: `eventType = "AI_WORKSHOP"` and `teamSize = 1`
- Invalid: `eventType = "AI_WORKSHOP"` and `teamSize > 1`

Invalid team registrations are rejected with `400 Bad Request`.

### Challenge C: Registration CRUD Operations

The API provides the following operations:

- Create a new registration.
- Retrieve all registrations.
- Retrieve an individual registration using its MongoDB ID.
- Update existing registration details.
- Delete a registration.

Update requests should validate the submitted data and recalculate the final payable amount whenever the ticket price or discount code changes.

### Challenge D: Filtering Registrations

The API supports filtering registrations using query parameters.

Examples:

- Filter by event type: `?eventType=ROBOTICS`
- Filter by status: `?status=CONFIRMED`
- Apply both filters together: `?eventType=ROBOTICS&status=CONFIRMED`

### Challenge E: Error Handling

The API handles common invalid requests, including:

- Duplicate email addresses.
- Invalid college email addresses.
- Invalid roll numbers.
- Unsupported discount codes.
- Invalid registration IDs.
- Missing registration records.
- Invalid AI Workshop team sizes.

Appropriate HTTP status codes are returned for validation failures, conflicts, missing resources, and successful operations, depending on the implemented error-handling middleware.

## 4. API Endpoints

| Method | Endpoint                 | Description                   | Expected Status Codes |
| ------ | ------------------------ | ----------------------------- | --------------------- |
| POST   | `/api/registrations`     | Create a new registration     | 201, 400, 409         |
| GET    | `/api/registrations`     | Retrieve all registrations    | 200                   |
| GET    | `/api/registrations/:id` | Retrieve a registration by ID | 200, 400, 404         |
| PUT    | `/api/registrations/:id` | Update registration details   | 200, 400, 404         |
| DELETE | `/api/registrations/:id` | Delete a registration         | 200, 400, 404         |

**Note:** The status codes above describe the expected API behavior; the exact responses depend on the implemented route handlers and error middleware.

## 5. Sample Request & Response

### Valid Registration Request

**Endpoint:** `POST /api/registrations`

**Request Body:**

```json
{
  "studentName": "Vrinda Oberoi",
  "collegeEmail": "vrinda_uid@ac.in",
  "rollNumber": "24BCS10172",
  "eventType": "CODING_HACKATHON",
  "teamSize": 3,
  "ticketPrice": 600,
  "discountCode": "EARLYBIRD"
}
```

### Expected Response

**Status:** `201 Created`

```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "_id": "671607a9b1c2e4f012345678",
    "studentName": "Vrinda Oberoi",
    "collegeEmail": "vrinda_uid@ac.in",
    "rollNumber": "24BCS10172",
    "eventType": "CODING_HACKATHON",
    "teamSize": 3,
    "ticketPrice": 600,
    "discountCode": "EARLYBIRD",
    "finalAmount": 300,
    "status": "PENDING"
  }
}
```

**Note:** This is an illustrative response. The actual response structure, generated MongoDB ID, and additional fields depend on your implementation.

## 6. Edge-Case Verification

### Test Case 1: Invalid College Email

**Input:**

```json
{
  "collegeEmail": "student@gmail.com"
}
```

**Expected Result:** `400 Bad Request`, if the schema restricts email addresses to approved college domains.

### Test Case 2: AI Workshop Team Size

**Input:**

```json
{
  "eventType": "AI_WORKSHOP",
  "teamSize": 2
}
```

**Expected Result:** `400 Bad Request` because AI Workshop registrations permit individuals only.

### Test Case 3: Duplicate Email Submission

Submit a registration using an email address that is already registered.

**Expected Result:** The duplicate registration is rejected. A `409 Conflict` response is appropriate when duplicate-key errors are handled explicitly.

### Test Case 4: Invalid MongoDB ObjectId

**Request:**

```http
GET /api/registrations/12345invalid
```

**Expected Result:** `400 Bad Request` if invalid MongoDB IDs are handled by the API.

### Test Case 5: CAMPUS50 Discount

**Input:** `ticketPrice = 600`, `discountCode = "CAMPUS50"`

**Expected Result:** `finalAmount = 300`

### Test Case 6: EARLYBIRD Discount

**Input:** `ticketPrice = 80`, `discountCode = "EARLYBIRD"`

**Expected Result:** `finalAmount = 0`

### Test Case 7: Registration Filtering

**Request:**

```http
GET /api/registrations?eventType=ROBOTICS&status=CONFIRMED
```

**Expected Result:** Registrations matching both filters are returned.

## 7. Installation & Setup

### Step 1: Download the Project

Download or clone the project repository and open the project folder in IntelliJ IDEA or another code editor.

```bash
cd campus-event-registration-api
```

### Step 2: Install Dependencies

Run the following command in the project terminal:

```bash
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file using `.env.example` as a reference.

Add the following configuration:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/campus_event_db?retryWrites=true&w=majority
```

Replace the placeholder credentials with your MongoDB Atlas connection details. Do not commit your actual `.env` file to GitHub.

### Step 4: Start the Development Server

```bash
npm run dev
```

If a production start script is configured, run:

```bash
npm start
```

### Step 5: Verify the API

Open the following URL in your browser:

[http://localhost:5000](http://localhost:5000)

The root endpoint should respond with an API status message if it is configured in the Express application.

### Step 6: Test Using Postman

Use Postman to test the following operations:

- Create registrations using POST.
- Retrieve all registrations using GET.
- Retrieve individual registrations by ID.
- Update registrations using PUT.
- Delete registrations using DELETE.
- Verify filtering, discount calculations, duplicate emails, invalid inputs, and AI Workshop team-size restrictions.

## 8. Technology Stack

- **Runtime:** Node.js
- **Backend Framework:** Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **API Testing:** Postman
- **Environment Configuration:** dotenv
- **Development Tool:** IntelliJ IDEA or Visual Studio Code

## 9. Database

MongoDB Atlas is used as the cloud database for storing event registration records. Mongoose provides schema definitions, data validation, database queries, and CRUD operations.

The registration data is managed through the `registrations` collection.

## 10. Conclusion

The Campus Event Registration REST API demonstrates the implementation of a backend application using Node.js, Express.js, MongoDB Atlas, and Mongoose. It covers RESTful CRUD operations, input validation, filtering, discount calculations, event-specific constraints, and error handling.

The project provides a foundation for managing registrations for college technical events in a structured and maintainable manner.
