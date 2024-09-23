"use client"
import React from 'react'
import styled from 'styled-components'
import { Check } from "lucide-react"
import { Container, PricingCard, PricingGrid, PricingSection } from '@/components/organisms/Pricing'
import { Button, Heading, SubHeading, Text } from '@/components/UI/Pricing'
import { FeatureItem, FeatureList, PriceTag } from '@/components/molecules/Pricing'
import Nav from '@/components/molecules/Nav'
import Footer from '@/components/molecules/Footer'

export default function PricingComponent() {
  const plans = [
    {
      name: 'Basic',
      price: '$0',
      features: ['Up to 5 projects', '100 tasks per project', 'Basic task management'],
      cta: 'Get started',
    },
    {
      name: 'Pro',
      price: '$3',
      features: ['Basic task management (up to 50 tasks)', 'Unlimited tasks', 'Advanced task management', 'Team collaboration'],
      cta: 'Get started',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['All Pro features', 'Advanced analytics', 'Dedicated support', 'Custom integrations'],
      cta: 'Coming Soon',
      comingSoon: true,
    },
  ]

  return (
    <PricingSection>
      <Nav />
      <Container>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <Heading color="#111827" fontSize="3rem" lineHeight="1.2" style={{ marginTop: '0.5rem' }}>
            Choose your perfect plan
          </Heading>
        </div>
        <Text fontSize="1.125rem" lineHeight="1.75" textAlign="center" style={{ maxWidth: '42rem', margin: '1.5rem auto 0' }}>
          Streamline your tasks with our intuitive and elegant ToDo app. Select the plan that best fits your needs.
        </Text>
        <PricingGrid>
          {plans.map((plan) => (
            <PricingCard key={plan.name}>
              <div>
                <SubHeading color="#4F46E5" fontSize="0.875rem" lineHeight="1.75">{plan.name}</SubHeading>
                <PriceTag>
                  <Text as="span" fontSize="3rem" fontWeight="bold" color="#111827">{plan.price}</Text>
                  {plan.price !== 'Custom' && <Text as="span" fontSize="0.875rem" fontWeight="semibold" color="#4B5563">/month</Text>}
                </PriceTag>
                <FeatureList>
                  {plan.features.map((feature) => (
                    <FeatureItem key={feature}>
                      <Check size={20} color="#4F46E5" />
                      {feature}
                    </FeatureItem>
                  ))}
                </FeatureList>
              </div>
              {plan.comingSoon ? (
                <div style={{ marginTop: '2rem', padding: '0.625rem 0.875rem', backgroundColor: '#F3F4F6', borderRadius: '0.375rem', textAlign: 'center' }}>
                  <Text fontSize="0.875rem" fontWeight="semibold" color="#111827">{plan.cta}</Text>
                </div>
              ) : (
                <Button href="#" style={{ marginTop: '2rem' }}>{plan.cta}</Button>
              )}
            </PricingCard>
          ))}
        </PricingGrid>
       
      </Container>
      <Footer />
    </PricingSection>
    

  )
}
