package com.group6.not_my_fitness_pal.food;

import com.group6.not_my_fitness_pal.person.Person;
import com.group6.not_my_fitness_pal.person.PersonDailyCalorieGoal;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class FoodController {

    private FoodService foodService;

    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @PostMapping(path = "food")
    public void addFood(@RequestBody Food food) {
        foodService.addFoodEntry(food);
    }

    @GetMapping(path = "food/all")
    public List<Food> foodList() {
        return foodService.getAllFoodEntries();
    }

    @DeleteMapping(path = "food/{id}")
    public void deleteFoodById(@PathVariable("id") Integer foodId) {
        foodService.deleteFood(foodId);
    }

    @PutMapping(path = "food/{id}")
    public void updateFoodById(@PathVariable("id") Integer foodId, @RequestBody Food update) {
        foodService.updateFood(foodId, update);
    }

    @GetMapping(path = "food/{id}")
    public Food getFoodById(@PathVariable("id") Integer foodId){
       return foodService.getFoodById(foodId);
    }

    @GetMapping(path = "food/person/{id}")
    public List<Food> getFoodEntriesByPersonId(@PathVariable("id") Integer personId){
        return foodService.getFoodEntriesByPersonId(personId);
    }

    @GetMapping(path = "food/person/{id}/week/{week}")
    public List<Food> getFoodEntriesByPersonIdByWeek(@PathVariable("id") Integer personId,@PathVariable("week") Integer week){
        return foodService.getFoodEntriesByPersonIdByWeek(personId, week);
    }

    @GetMapping(path = "food/person/{id}/week/{week}/day/{day}")
    public List<Food> getFoodEntriesByPersonIdByWeekByDay(@PathVariable("id") Integer personId,@PathVariable("week") Integer week, @PathVariable("day") Day day){//should day be string
        return foodService.getFoodEntriesByPersonIdByWeekByDay(personId, week, day);
    }

    @GetMapping(path = "food/mealtype/{mealtype}")
    public List<Food> getFoodEntriesByMealType(@PathVariable("mealtype") String mealType){//should day be string
        return foodService.getFoodEntriesByMealType(MealType.valueOf(mealType)); //converts string input for mealType into an ENUM
    }


    // Stretch Goal - GetDailyCalorieGoalsByWeekByDay
    @GetMapping(path = "food/calorie_goals/week/{week}/day/{day}")
    public List<PersonDailyCalorieGoal> getDailyCalorieGoalsByWeekByDay(@PathVariable("week") Integer week, @PathVariable("day") Day day){
        return foodService.getDailyCalorieGoalsByWeekByDay(week, day);
    }


}
