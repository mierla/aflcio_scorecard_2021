import { directive } from '@babel/types'
import React from 'react'
import { withRouter } from 'react-router'
import twentyTwelve from '../assets/pdfs/2012-Maine-AFLCIO-Scorecard.pdf'
import twentyFourteen from '../assets/pdfs/2014-Maine-AFLCIO-Scorecard.pdf'
import twentySixteen from '../assets/pdfs/2016-Maine-AFLCIO-Scorecard.pdf'
import twentyEighteen from '../assets/pdfs/2018-Maine-AFLCIO-Scorecard.pdf'
import twentyTwentyOne from '../assets/pdfs/2021-Maine-AFLCIO-Scorecard.pdf'

export default function Archive() {
	return (
		<div>
			<section class="container card-container archive-list">
				<div class="row">
					<a href={twentyTwelve} class="button" alt="2012">2012 Scorecard</a>						
				</div>
				<div class="row">
					<a href={twentyFourteen} class="button" alt="2014">2014 Scorecard</a>				
				</div>
				<div class="row">
					<a href={twentySixteen} class="button" alt="2016">2016 Scorecard</a>				
				</div>
				<div class="row">
					<a href={twentyEighteen} class="button" alt="2018">2018 Scorecard</a>				
				</div>
				<div class="row">
					<a href={twentyTwentyOne} class="button" alt="2021">2021 Scorecard</a>				
				</div>
			</section>

		</div>

	)
}
