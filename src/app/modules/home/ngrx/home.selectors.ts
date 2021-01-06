import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeStateModel } from "../models/home-state.model";

export const selectHome = createFeatureSelector<HomeStateModel>('home');

export const selectFeaturedProducts = createSelector(selectHome, home=> home ?  home.featuredProducts: []);
export const selectBestSellingProducts = createSelector(selectHome, home=>home? home.bestSellingProducts: []);