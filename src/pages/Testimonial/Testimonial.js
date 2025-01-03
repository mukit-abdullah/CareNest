import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  Avatar,
  Rating 
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Sarah Johnson',
    relation: 'Daughter of Resident',
    rating: 5,
    text: 'The care and attention my mother receives at CareNest is exceptional. The staff treats her like family, and I have complete peace of mind knowing she is in such good hands.',
    image: '/images/testimonials/testimonial1.jpg'
  },
  {
    name: 'Robert Wilson',
    relation: 'Resident',
    rating: 5,
    text: 'Moving to CareNest was the best decision I made. The community is wonderful, activities are engaging, and the staff is always there when you need them.',
    image: '/images/testimonials/testimonial2.jpg'
  },
  {
    name: 'Emily Martinez',
    relation: 'Family Member',
    rating: 5,
    text: 'The dedication of the staff is remarkable. They go above and beyond to ensure every resident feels comfortable and cared for. It truly feels like a home.',
    image: '/images/testimonials/testimonial3.jpg'
  },
  {
    name: 'David Thompson',
    relation: 'Son of Resident',
    rating: 5,
    text: 'I am incredibly grateful for the compassionate care my father receives. The facility is always clean, the food is excellent, and the activities keep him engaged.',
    image: '/images/testimonials/testimonial4.jpg'
  },
  {
    name: 'Patricia Brown',
    relation: 'Resident',
    rating: 5,
    text: 'Living at CareNest has given me a new lease on life. The social activities and friendly atmosphere make every day enjoyable.',
    image: '/images/testimonials/testimonial5.jpg'
  },
  {
    name: 'Michael Lee',
    relation: 'Family Member',
    rating: 5,
    text: 'The professionalism and warmth of the staff is unmatched. They treat each resident with respect and dignity while providing top-notch care.',
    image: '/images/testimonials/testimonial6.jpg'
  }
];

const Testimonial = () => {
  return (
    <Box sx={{ bgcolor: '#1a472a', minHeight: '100vh', py: 8 }}>
      <Container>
        {/* Header */}
        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{
            color: 'white',
            mb: 6,
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}
        >
          What Our Families Say
        </Typography>

        {/* Testimonials Grid */}
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  transition: 'transform 0.3s ease',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    bgcolor: 'rgba(255,255,255,0.15)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ position: 'relative', mb: 4 }}>
                    <FormatQuoteIcon 
                      sx={{ 
                        position: 'absolute',
                        top: -10,
                        left: -10,
                        fontSize: '3rem',
                        color: '#d4af37',
                        opacity: 0.3
                      }} 
                    />
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        minHeight: '120px',
                        pt: 3,
                        px: 2
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{ width: 60, height: 60 }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "'Playfair Display', serif",
                          color: '#d4af37'
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        {testimonial.relation}
                      </Typography>
                      <Rating 
                        value={testimonial.rating} 
                        readOnly 
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: '#d4af37'
                          }
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box 
          sx={{ 
            mt: 8, 
            textAlign: 'center', 
            color: 'white',
            p: 4,
            bgcolor: 'rgba(255,255,255,0.1)',
            borderRadius: 2
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              color: '#d4af37'
            }}
          >
            Share Your Experience
          </Typography>
          <Typography>
            We value feedback from our residents and their families. Your testimonials help us improve and provide better care.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;
