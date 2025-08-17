/*
  # Add sample clinic data

  1. New Data
    - Insert 5 sample clinics in Birmingham, Alabama
    - Each clinic includes complete information: contact details, ratings, reviews, hours, and descriptions
  
  2. Data Structure
    - All clinics are located in Alabama, Birmingham
    - Includes real-world style data for testing the directory functionality
    - Proper escaping of special characters in text fields
*/

INSERT INTO clinics (
  "Id", "State", "City", "Name", "Address", "Phone", "Website", "Rating", 
  "Review1", "Review2", "Review3", 
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", 
  "Description"
) VALUES 
(
  1,
  'Alabama',
  'Birmingham',
  'Skin Wellness Dermatology',
  '3415 Independence Dr Ste 200, Birmingham, AL 35209, USA',
  '+1 205-871-7332',
  'https://www.skinwellness.com/?utm_source=GMBlisting&utm_medium=organic',
  '4.8',
  'Great experiences here! The nurses, techs, and staff are all so sweet. I love my NP Alison Hayes (she is EXCELLENT!!) and got great advice from Dr. Hartman during a referral. Not only are they great for medical dermatology but also cosmetic. Very happy with them!!',
  'I''ve been a patient of Dr. Hartman for years. He is incredibly knowledgeable and patient . He takes the time to address all of my concerns. The staff has been friendly and the office is clean and welcoming. My treatment plans are always explained and I''ve seen tremendous improvements ( when I''m consistent) . I highly recommend this practice to anyone looking for a skilled and caring dermatologist.',
  'There is such a positive atmosphere here. These professionals truly care about your experience, recovery, and results! Before visiting Skin Wellness Dermatology, I struggled for many years without answers or relief. After only a short time as a patient at the Homewood office, I cannot express enough gratitude for the significant improvement and support that I have received from the team regarding my skin. I now love to see and hear that my skin is clear, replenished, and thriving!',
  'Monday: 7:30 AM – 4:30 PM',
  'Tuesday: 7:30 AM – 4:30 PM',
  'Wednesday: 7:30 AM – 4:30 PM',
  'Thursday: 7:30 AM – 4:30 PM',
  'Friday: 7:30 AM – 1:00 PM',
  'Saturday: Closed',
  'Sunday: Closed',
  'Skin Wellness Dermatology offers a comprehensive range of dermatological services, encompassing medical and cosmetic dermatology, aesthetic treatments, and laser procedures. They cater to various skin concerns, including sun damage, acne, eczema, psoriasis, rosacea, scarring, and anti-aging needs. Their services utilize cutting-edge technology and are complemented by a membership program offering additional benefits. The practice emphasizes personalized care, accessibility, and affordability, aiming to provide high-quality treatment tailored to individual patient needs. The ''BREEZE IN'' program offers convenient early morning appointments.'
),
(
  2,
  'Alabama',
  'Birmingham',
  'Dermatology & Laser of Alabama',
  '201 Office Park Dr Suite 350, Birmingham, AL 35223, USA',
  '+1 205-870-3303',
  'https://birminghamskin.com/',
  '4.9',
  'Dr. Z is amazing! She is extremely thorough and detailed with her treatments. Snd she is the most gentle injector I have ever experienced. I am thrilled with my results and with the advice she has provided since I have been seeing her. Highly recommend!',
  'I cannot say enough great things about Abby at Dermatology & Laser of Alabama! She is truly exceptional at what she does. I''ve had multiple treatments with her, including Clear + Brilliant, and every single experience has been fantastic. She is incredibly knowledgeable, professional, and takes the time to understand my skin concerns, ensuring that I receive the best possible care.',
  'Wonderful experience. So professional, and they really know their stuff. I have no bruising like I did the first time. I feel like Dr. Sawyer and her staff are on the cutting edge of the best technology out there, and they truly care about helping their patients.',
  'Monday: 8:00 AM – 5:00 PM',
  'Tuesday: 8:00 AM – 5:00 PM',
  'Wednesday: 8:00 AM – 5:00 PM',
  'Thursday: 8:00 AM – 5:00 PM',
  'Friday: 8:00 AM – 4:00 PM',
  'Saturday: Closed',
  'Sunday: Closed',
  'Dermatology & Laser of Alabama (DLA) is a Birmingham-based practice offering a comprehensive range of cosmetic and medical dermatology services. Their services include injectables (Botox, fillers), laser treatments (skin tightening, body shaping), sclerotherapy, hair loss restoration, vaginal rejuvenation, various facials (chemical peels, microneedling, dermaplaning), IV hydration, and general skincare. They also provide medical dermatology services, addressing a wide spectrum of skin health concerns. The practice boasts a team of board-certified dermatologists and a dedicated staff, emphasizing a patient-centered approach with thorough consultations and personalized treatment plans.'
),
(
  3,
  'Alabama',
  'Birmingham',
  'Ginsburg Dermatology Center and Medical Spa',
  '972 Montclair Rd Suite 100, Birmingham, AL 35213, USA',
  '+1 205-209-4780',
  'https://www.ginsburgderm.com/',
  '4.9',
  'I was referred to Dr. Adar at Alabama Dermatology and Rejuvenation for a lesion on my face several weeks ago. That lesion turned out to be a squamous cell carcinoma. Doctor Adar and his staff was very efficient, professional, and reassuring.I had no pain during and after the procedure and several weeks later, there is no scarring. Dr. Tony Adar and his staff were marvelous through the whole procedure and outcome. I highly recommend them if you have any dermatology problems and to be checked thoroughly for his excellent care.',
  'I love Dr Adar and his office. They all are professional, extremely pleasant, and highly competent. Dr Adar removed a cyst from my shoulder. It was practically painless after the local anesthetic wore off, (Completely painless during the procedure), and I have a low tolerance for pain. Plus, Dr Adar was so sweet. I just can''t say enough good things about him and his team.',
  'Dr Adar and his staff are exceptional. He takes his time in explaining his techniques. He WILL NOT over due it on any type of cosmetic procedures. He really cares about his patients and rest assured I could ask for 1,000''s of dollars worth of fillers, botox etc. In 1 visit But He will not do it!!! He knows what''s best for his patients. Plus I don''t have 1,000''s to spend. Dr Adar is the best !!!',
  'Monday: 8:00 AM – 4:00 PM',
  'Tuesday: 8:00 AM – 4:00 PM',
  'Wednesday: 8:00 AM – 4:00 PM',
  'Thursday: 8:00 AM – 4:00 PM',
  'Friday: 8:00 AM – 4:00 PM',
  'Saturday: Closed',
  'Sunday: Closed',
  'Ginsburg Dermatology Center and Medical Spa, now part of Adar Dermatology, offers a comprehensive range of medical and cosmetic dermatology services in Birmingham, AL. Their services span medical dermatology, addressing conditions like acne, hair loss, eczema, psoriasis, and skin cancer (including Mohs surgery), and cosmetic dermatology, encompassing Botox, fillers (Restylane, Sculptra, Bellafill), skin resurfacing, body sculpting (CoolSculpting, liposuction), and various spa treatments. They emphasize personalized care, cutting-edge technology, and a warm, inviting atmosphere, suggesting a commitment to patient comfort and satisfaction.'
),
(
  4,
  'Alabama',
  'Birmingham',
  'Dermatologists of Birmingham',
  '3570 Grandview Pkwy #100B, Birmingham, AL 35243, USA',
  '+1 205-588-7000',
  'https://www.dermatologistsofbirmingham.com/',
  '4.9',
  'Dr. Northington and her staff are the best! They are professional and warm and positive and considerate and accommodating. I could not recommend them more highly!',
  'I love how warm and welcoming and friendly. The whole office staff is. I appreciate that Dr. Northington took the time to sit and talk with me about my concerns and the way she eased my anxiety for having anything done.',
  'Personable, professional service every time I come here. The staff and Dr. Northington always make you feel like more than just a patient. Have been coming here for over 5 years and wouldn''t think of going anywhere else.',
  'Monday: 8:30 AM – 4:30 PM',
  'Tuesday: 8:30 AM – 4:30 PM',
  'Wednesday: 8:30 AM – 4:30 PM',
  'Thursday: 8:30 AM – 4:30 PM',
  'Friday: 9:00 AM – 1:30 PM',
  'Saturday: Closed',
  'Sunday: Closed',
  'Dermatologists of Birmingham is a comprehensive dermatology and skin care practice offering medical, cosmetic, and surgical services in two Alabama locations. Their medical dermatology services encompass a wide range of treatments for conditions such as acne, eczema, psoriasis, rosacea, skin cancer (including melanoma), and various rashes, along with mole removal and skin lesion examinations. Cosmetic dermatology services include body sculpting, Botox, fillers, chemical peels, laser treatments (hair removal, tattoo removal, vascular treatments, Fraxel), dermaplaning, sclerotherapy, and various skincare products.'
),
(
  5,
  'Alabama',
  'Birmingham',
  'Cahaba Dermatology & Skin Health Center',
  '2279 Valleydale Rd #100, Birmingham, AL 35244, USA',
  '+1 205-214-7546',
  'https://cahabaderm.com/?utm_source=gmb&utm_medium=organic',
  '4.8',
  'I love Cahaba D and Dr G. Her staff are amazing. Everyone of them are kind gracious and so knowledgeable in their field. Dr G has incredible expertise and skillful procedures. There are no pressure sales but they come alongside of you to help you make the best decisions for your self in regard to skincare and treatment. I have been a patient for 15 years and plan on remaining a patient.',
  'I love this place is much. Literally the best customer service. The office is so clean. Everyone had a smile on their face and welcomed me like family. Please come here I can''t wait for the results!!! So helpful!!!!',
  'I love Dr. Gerald! I will not name names, but I have been to 3 other Dermatologists, all well known in the Birmingham area. One is also at Cahaba Dermatology and the other two are at a different practice. Dr. Gerald BY FAR does the most thorough exam out of all 4 of them. I think it is very important to have a very thorough exam when looking for possible skin cancers.',
  'Monday: 8:00 AM – 5:00 PM',
  'Tuesday: 8:00 AM – 5:00 PM',
  'Wednesday: 8:00 AM – 5:00 PM',
  'Thursday: 8:00 AM – 5:00 PM',
  'Friday: 8:00 AM – 5:00 PM',
  'Saturday: 10:00 AM – 9:00 PM',
  'Sunday: Closed',
  'Cahaba Dermatology & Skin Health Center is a comprehensive dermatology practice offering a wide range of medical, surgical, and cosmetic services. Their medical services address various skin conditions such as acne, eczema, psoriasis, and skin cancer, including screening and MOHS surgery. Surgical options include cryosurgery, mole removal, and scar revision. The cosmetic services encompass injectables (Botox, fillers), laser treatments (hair removal, tattoo removal, skin resurfacing), body contouring (CoolSculpting), and skin rejuvenation procedures.'
);