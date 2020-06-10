<?php

namespace WC_Product_Subtitle;

defined( 'ABSPATH' ) || exit;

use VSP\Base;

/**
 * Class Display_Handler
 *
 * @package WC_Product_Subtitle
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Display_Handler extends Base {
	/**
	 * Stores Tag Handler Instance.
	 *
	 * @var bool|\WC_Product_Subtitle\Tag_Handler
	 */
	protected $tag_handler = false;

	/**
	 * Display_Handler constructor.
	 *
	 * @param string $slug
	 */
	public function __construct( $slug ) {
		$this->tag_handler = new Tag_Handler( $slug );
		$this->settings    = wc_ps_option( $slug, array() );
	}

	/**
	 * Fetches & Returns Subtitle Position.
	 *
	 * @return bool|mixed
	 */
	public function get_position() {
		return $this->option( 'position', false );
	}

	/**
	 * Checks if subtitle should be placed before.
	 *
	 * @return bool|mixed
	 */
	public function is_before() {
		return $this->option( 'placement', false );
	}

	/**
	 * Fetches & Returns Subtitle Position Element.
	 *
	 * @return bool|mixed
	 */
	public function get_element() {
		return $this->option( 'element', false );
	}

	/**
	 * Echo The Subtitle.
	 *
	 * @param string $pid
	 */
	public function the_subtitle( $pid = '' ) {
		echo $this->render_subtitle( $pid );
	}

	/**
	 * Renders Subtitle.
	 *
	 * @param string $pid
	 *
	 * @return false|string
	 */
	public function render_subtitle( $pid = '' ) {
		global $post;
		if ( empty( $pid ) && isset( $post->ID ) ) {
			$pid = $post->ID;
		}
		return $this->tag_handler->print_subtitle( get_product_subtitle( $pid ), $this->get_element(), $pid );
	}
}
