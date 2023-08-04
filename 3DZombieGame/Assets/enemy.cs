using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class enemy : MonoBehaviour
    
{
    
    public int maxHealth = 100;
    int currentHealth;
    public Animator animator;
    // Start is called before the first frame update
    void Start()
    {
        currentHealth = maxHealth;

    }

    public void TakeDamage(int damage)
    {
        currentHealth -= damage;
        // hurt player
        if (currentHealth <= 0)
        {

            Die();

        }

    }
    void Die()
    {
        
        Debug.Log("enemy died!");
        animator.SetBool("isDead", true);
        GetComponent<Collider>().enabled = false;
        GetComponent<characteragent>().enabled = false;
        GetComponent<EnemyAttack>().enabled = false;
        
        this.enabled = false;
    }
 
}
